import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'
const createUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.signupIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  })
})

const loginUser = catchAsync(async (req, res) => {
  const { AccessToken, filteredUser } = await UserServices.loginUser(req.body)

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'User is logged in successfully!',
    token: AccessToken,
    data: filteredUser,
  })
})

export const UserControllers = {
  createUser,
  loginUser,
}
