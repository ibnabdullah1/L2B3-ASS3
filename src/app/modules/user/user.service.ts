import httpStatus from 'http-status'
import jwt from 'jsonwebtoken'
import config from '../../config'
import AppError from '../../errors/AppError'
import { User } from './use.model'
import { TLoginUser, TUser } from './user.interface'

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

  const filteredUser = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    profileUrl: user.profileUrl,
    address: user.address,
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
    profileUrl: user.profileUrl,
  }
  const AccessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  })

  return { AccessToken, filteredUser }
}
export const UserServices = {
  signupIntoDB,
  loginUser,
}
