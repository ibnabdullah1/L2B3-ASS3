import httpStatus from 'http-status'
import jwt from 'jsonwebtoken'
import config from '../../config'
import AppError from '../../errors/AppError'
import { UpdateUserRoleData } from '../../interface/error'
import { TLoginUser, TUser } from './auth.interface'
import { User } from './auth.model'

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
const getAllUserIntoDB = async () => {
  const result = await User.find()
  return result
}

const getSingleUserIntoDB = async (email: string) => {
  const result = await User.findOne({ email })
  return result
}
const updateUserRole = async (data: UpdateUserRoleData) => {
  const result = await User.findByIdAndUpdate(
    { _id: data.id },
    { role: data.role },
    { new: true },
  )
  return result
}

export const AuthServices = {
  signupIntoDB,
  loginUser,
  getAllUserIntoDB,
  getSingleUserIntoDB,
  updateUserRole,
}
