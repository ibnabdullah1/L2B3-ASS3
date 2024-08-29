import { Schema } from 'mongoose'
interface TReview {
  date: string
  name: string
  image: string
  email: string
  rating: number
  review: string
  reviewer: string
}

export interface TService {
  name: string
  description: string
  price: number
  duration: number
  image: string
  reviewsCollection?: TReview[]
  isDeleted: boolean
}

export interface TSlot {
  service: Schema.Types.ObjectId
  date: string
  startTime: string
  endTime: string
  isBooked?: string
}
