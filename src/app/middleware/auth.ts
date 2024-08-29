import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { TUserRole } from '../interface/error'
import catchAsync from '../utils/catchAsync'
import sendResponse from '../utils/sendResponse'

export const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]

    // checking if the token is missing
    if (!token) {
      return sendResponse(res, {
        success: false,
        statusCode: 404,
        message: 'Please provide a token',
      })
    }
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          return sendResponse(res, {
            success: false,
            statusCode: 404,
            message: 'You are not authorized!',
          })
        }

        // Decoded undefined
        const role = (decoded as JwtPayload).role
        if (requiredRoles && !requiredRoles.includes(role)) {
          return sendResponse(res, {
            success: false,
            statusCode: 401,
            message: 'You have no access to this route',
          })
        }
        req.user = decoded as JwtPayload

        next()
      },
    )
  })
}
