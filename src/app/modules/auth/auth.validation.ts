import { z } from 'zod'
const signUpValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
    }),
    password: z.string({
      invalid_type_error: 'password must be string',
    }),
    email: z.string({
      invalid_type_error: 'Email must be string',
    }),
    phone: z.string({
      invalid_type_error: 'Phone must be string',
    }),
    profileUrl: z.string({
      invalid_type_error: 'ProfileUrl must be string',
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
