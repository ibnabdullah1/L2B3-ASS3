import { z } from 'zod'

const ServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
    }),
    description: z.string({
      invalid_type_error: 'Description must be string',
    }),
    price: z.number({
      invalid_type_error: 'Price must be number',
    }),
    duration: z.number({
      invalid_type_error: 'duration must be number',
    }),
    isDeleted: z.boolean().optional(),
  }),
})

export const ServiceValidations = {
  ServiceValidationSchema,
}
