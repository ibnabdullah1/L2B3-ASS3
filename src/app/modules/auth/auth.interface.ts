import { Model } from 'mongoose'
import { USER_ROLE } from './auth.constant'

export interface TUser {
  _id: string
  name: string
  email: string
  password: string
  phone: string
  profileUrl?: string
  role: 'admin' | 'user'
  address: string
  isDeleted: boolean
}

export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser>
  isPasswordMatched(
    plainTextPassword: string,
    hashPassword: string,
  ): Promise<boolean>
}
export type TLoginUser = {
  email: string
  password: string
}
export type TUserRole = keyof typeof USER_ROLE
