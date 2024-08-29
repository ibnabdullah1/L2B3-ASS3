import { Schema, model } from 'mongoose'
import { TBooking } from './booking.interface'

const bookingSchema = new Schema<TBooking>(
  {
    customer: {
      type: String,
      required: true,
      ref: 'User',
    },
    service: {
      type: String,
      required: true,
      ref: 'Service',
    },
    slot: {
      type: String,
      required: true,
      ref: 'Slot',
    },
    vehicleType: {
      type: String,
      required: true,
    },
    vehicleBrand: {
      type: String,
      required: true,
    },
    vehicleModel: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: String,
      required: true,
    },
    // registrationPlate: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const Booking = model('Bookings', bookingSchema)
