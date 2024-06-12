import { z } from 'zod'
const signUpValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be string',
      })
      .max(40, { message: 'Name can not be less than 20 characters' }),

    password: z
      .string({
        invalid_type_error: 'password must be string',
      })
      .max(20, { message: 'Password can not be less than 20 characters' }),
    email: z.string({
      invalid_type_error: 'Email must be string',
    }),
    phone: z.string({
      invalid_type_error: 'Phone must be string',
    }),
    role: z.enum(['admin', 'user']),
    address: z.string({
      invalid_type_error: 'Address must be string',
    }),
  }),
})

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({
      invalid_type_error: 'password must be string',
    }),
    password: z.string({
      invalid_type_error: 'password must be string',
    }),
  }),
})
export const UserValidations = {
  signUpValidationSchema,
  loginValidationSchema,
}
