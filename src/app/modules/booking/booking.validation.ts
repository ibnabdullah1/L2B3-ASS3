import { z } from 'zod'
import { VehicleType } from './booking.constant'

const createBookingValidationSchema = z.object({
  body: z.object({
    customer: z
      .string({
        invalid_type_error: 'customer must be string',
      })
      .optional(),
    serviceId: z.string({
      invalid_type_error: 'Service must be string',
    }),
    slotId: z.string({
      invalid_type_error: 'Slot must be string',
    }),
    vehicleType: z.enum([...VehicleType] as [string, ...string[]]),
    vehicleModel: z.string({
      invalid_type_error: 'vehicleModel must be string',
    }),
    manufacturingYear: z
      .number({
        invalid_type_error: 'ManufacturingYear must be number',
      })
      .int(),
    registrationPlate: z.string({
      invalid_type_error: 'RegistrationPlate must be string',
    }),
  }),
})
const updateBookingValidationSchema = z.object({
  body: z.object({
    customer: z.string().optional(),
    service: z.string().optional(),
    slot: z.string().optional(),
    vehicleType: z.enum([...VehicleType] as [string, ...string[]]).optional(),
    vehicleModel: z.string().optional(),
    manufacturingYear: z.number().int().optional(),
    registrationPlate: z.string().optional(),
  }),
})
export const BookingValidations = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
}
