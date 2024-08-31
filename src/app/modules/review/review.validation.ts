import { z } from 'zod'

const createReviewValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
    title: z.string({
      invalid_type_error: 'Title must be a string',
    }),
    rating: z
      .number({
        invalid_type_error: 'Rating must be a number',
      })
      .min(1)
      .max(5, 'Rating must be between 1 and 5'),
    image: z.string({
      invalid_type_error: 'Image URL must be a string',
    }),
    review: z.string({
      invalid_type_error: 'Review must be a string',
    }),
    date: z.string({
      invalid_type_error: 'Date must be a string',
    }),
  }),
})

const updateReviewValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    rating: z.number().min(1).max(5).optional(),
    image: z.string().optional(),
    review: z.string().optional(),
    date: z.string().optional(),
  }),
})

export const ReviewValidations = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
}
