import { z } from 'zod'

const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
    }),
    image: z.string({
      invalid_type_error: 'Image must be string',
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
const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be string',
      })
      .optional(),
    image: z
      .string({
        invalid_type_error: 'Image must be string',
      })
      .optional(),
    description: z
      .string({
        invalid_type_error: 'Description must be string',
      })
      .optional(),
    price: z
      .number({
        invalid_type_error: 'Price must be number',
      })
      .optional(),
    duration: z
      .number({
        invalid_type_error: 'duration must be number',
      })
      .optional(),
    isDeleted: z.boolean().optional(),
  }),
})
const slotValidationSchema = z.object({
  body: z.object({
    service: z.string({
      invalid_type_error: 'Service must be string',
    }),
    date: z.string({
      invalid_type_error: 'Date must be string',
    }),
    startTime: z.string({
      invalid_type_error: 'startTime must be string',
    }),
    endTime: z.string({
      invalid_type_error: 'endTime must be string',
    }),
    isBooked: z.string().optional().default('Available'),
  }),
})

export const ServiceValidations = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
  slotValidationSchema,
}
