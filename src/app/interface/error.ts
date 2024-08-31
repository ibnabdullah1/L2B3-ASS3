import { USER_ROLE } from '../modules/auth/auth.constant'

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
export interface UpdateUserRoleData {
  id: string
  role: string
}
