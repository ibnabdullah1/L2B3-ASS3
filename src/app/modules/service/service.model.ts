import mongoose, { Schema, model } from 'mongoose'
import { TService, TSlot } from './service.interface'
const ReviewSchema: Schema = new Schema({
  reviewer: { type: String, required: true },
  review: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: false },
  email: { type: String, required: true },
})

const serviceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: { type: String, required: true },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    reviewsCollection: [ReviewSchema],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)
const SlotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Service',
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ['available', 'blocked', 'canceled'],
      default: 'available',
    },
  },
  { timestamps: true },
)

export const Service = model<TService>('Service', serviceSchema)
export const Slot = mongoose.model<TSlot>('Slot', SlotSchema)
