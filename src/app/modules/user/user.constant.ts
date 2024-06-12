export const USER_ROLE = {
  admin: 'admin',
  user: 'user',
} as const
export interface TUserRes {
  _id: string
  name: string
  email: string
  phone: string
  role: string
  address: string
  createdAt?: string
  updatedAt?: string
}
