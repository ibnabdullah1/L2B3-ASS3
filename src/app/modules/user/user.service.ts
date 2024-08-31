import { UpdateUserRoleData } from '../../interface/error'
import { User } from '../auth/auth.model'

const getAllUserIntoDB = async () => {
  const result = await User.find({ isDeleted: false })
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
const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  )

  return result
}

export const UserServices = {
  getAllUserIntoDB,
  getSingleUserIntoDB,
  updateUserRole,
  deleteUserFromDB,
}
