import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import config from '../../config'
import { TUser, UserModel } from './auth.interface'

const userSchema: Schema<TUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ['admin'],
      default: 'admin',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const student = this
  student.password = await bcrypt.hash(
    student.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})
//  Set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email })
}

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashPassword,
) {
  return await bcrypt.compareSync(plainTextPassword, hashPassword)
}
export const User = model<TUser, UserModel>('User', userSchema)
