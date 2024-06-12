import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export interface TUser {
  _id: any
  id: any
  name: string
  email: string
  password: string
  phone: string
  role: 'admin' | 'user'
  address: string
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
