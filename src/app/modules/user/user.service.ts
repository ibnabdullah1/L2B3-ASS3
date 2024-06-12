import httpStatus from 'http-status'
import config from '../../config'
import AppError from '../../errors/AppError'
import { User } from './use.model'
import { TLoginUser, TUser } from './user.interface'
const jwt = require('jsonwebtoken')

const signupIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
}

const loginUser = async (payload: TLoginUser) => {
  // Check if the user is exists
  const user = await User.isUserExistsByEmail(payload.email)

  if (!user) {
    throw new AppError(httpStatus.FORBIDDEN, 'User does not exist')
  }

  // Checking if the password is correct
  const isPasswordMatch = await User.isPasswordMatched(
    payload?.password,
    user?.password,
  )
  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not match')
  }

  // Create token sent to the client
  const jwtPayload = {
    userEmail: user?.email as string,
    role: user.role,
  }
  const AccessToken = jwt.sign(jwtPayload, config.jwt_access_secret, {
    expiresIn: '10d',
  })

  return { AccessToken, user }
}
export const UserServices = {
  signupIntoDB,
  loginUser,
}
