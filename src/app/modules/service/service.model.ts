import mongoose, { Schema, model } from 'mongoose'
import { TService, TSlot } from './service.interface'

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
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
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
