import { Schema } from 'mongoose'

export type TVehicleType =
  | 'car'
  | 'truck'
  | 'SUV'
  | 'van'
  | 'motorcycle'
  | 'bus'
  | 'electricVehicle'
  | 'hybridVehicle'
  | 'bicycle'
  | 'tractor'

export interface TBooking {
  customer: Schema.Types.ObjectId
  service: Schema.Types.ObjectId
  slot: Schema.Types.ObjectId
  vehicleType: TVehicleType
  vehicleBrand: string
  vehicleModel: string
  manufacturingYear: number
  registrationPlate: string
}
