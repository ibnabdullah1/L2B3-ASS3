import { USER_ROLE } from '../modules/user/user.constant'

export type TErrorSources = {
  path: string
  message: string
}[]
export type TGenericErrorResponse = {
  statusCode: number
  message: string
  errorSources: TErrorSources
}
export type TUserRole = keyof typeof USER_ROLE
