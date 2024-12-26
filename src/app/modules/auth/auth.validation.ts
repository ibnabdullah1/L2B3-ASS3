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
    role: z.enum(['admin']),
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
