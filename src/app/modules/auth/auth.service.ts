import httpStatus from 'http-status'
import jwt from 'jsonwebtoken'
import config from '../../config'
import AppError from '../../errors/AppError'
import { TLoginUser, TUser } from './auth.interface'
import { User } from './auth.model'

const signupIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
}

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload.email)

  if (!user) {
    throw new AppError(httpStatus.FORBIDDEN, 'User does not exist')
  }

  const filteredUser = {
    name: user.name,
    email: user.email,
    role: user.role,
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
    name: user.name,
  }
  const AccessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '60d',
  })

  return { AccessToken, filteredUser }
}
export const AuthServices = {
  signupIntoDB,
  loginUser,
}
