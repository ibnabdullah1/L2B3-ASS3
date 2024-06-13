import { Schema } from 'mongoose'

export interface TService {
  name: string
  description: string
  price: number
  duration: number
  isDeleted: boolean
}

export interface TSlot {
  service: Schema.Types.ObjectId
  date: string
  startTime: string
  endTime: string
  isBooked?: string
}
