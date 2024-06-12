import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import AppError from '../errors/AppError'
import { TUserRole } from '../interface/error'
import catchAsync from '../utils/catchAsync'

export const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
    }
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You are not authorized! Hi!',
          )
        }

        // Decoded undefined
        const role = (decoded as JwtPayload).role
        if (requiredRoles && !requiredRoles.includes(role)) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
        }
        req.user = decoded as JwtPayload

        next()
      },
    )
  })
}