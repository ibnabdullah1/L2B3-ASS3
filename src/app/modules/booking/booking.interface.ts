import { Schema } from 'mongoose'

export interface TBooking {
  customer: Schema.Types.ObjectId
  service: Schema.Types.ObjectId
  slot: Schema.Types.ObjectId
  vehicleType: string
  vehicleBrand: string
  vehicleModel: string
  manufacturingYear: string
  // registrationPlate: string
}
