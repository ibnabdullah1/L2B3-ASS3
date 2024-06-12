import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TUserRes } from './user.constant'
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
  const { AccessToken, user } = await UserServices.loginUser(req.body)

  const resUser: TUserRes = {
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    address: user.address,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }

  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'User is logged in successfully!',
    token: AccessToken,
    data: resUser,
  })
})

export const UserControllers = {
  createUser,
  loginUser,
}
