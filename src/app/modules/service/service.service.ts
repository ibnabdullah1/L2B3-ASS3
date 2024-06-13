import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TService, TSlot } from './service.interface'
import { Service, Slot } from './service.model'

const createServiceIntoDB = async (payload: TService) => {
  const result = await Service.create(payload)
  return result
}
const getAllServiceIntoDB = async () => {
  // const result = await Service.find()
  const result = await Service.find({ isDeleted: false })
  return result
}
const getSingleServiceIntoDB = async (_id: string) => {
  const result = await Service.findOne({ _id })
  return result
}
const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}
const deleteServiceFromDB = async (id: string) => {
  console.log(id)
  const result = await Service.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  )
  return result
}

const createSlotFromDB = async (payload: TSlot) => {
  const { service, date, startTime, endTime } = payload

  // Check if the service exists
  const isServiceExist = await Service.findOne({ _id: service })

  if (!isServiceExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service not found')
  }

  // Convert start and end times to minutes
  const [startHour, startMinute] = startTime.split(':').map(Number)
  const [endHour, endMinute] = endTime.split(':').map(Number)

  const startTotalMinutes = startHour * 60 + startMinute
  const endTotalMinutes = endHour * 60 + endMinute

  // Calculate total duration and number of slots
  // 60 minutes as given per slots
  const serviceDuration = 60
  const totalDuration = endTotalMinutes - startTotalMinutes
  const numberOfSlots = totalDuration / serviceDuration

  const slots = []
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartMinutes = startTotalMinutes + i * serviceDuration
    const slotEndMinutes = slotStartMinutes + serviceDuration

    const slotStartHour = Math.floor(slotStartMinutes / 60)
      .toString()
      .padStart(2, '0')
    const slotStartMinute = (slotStartMinutes % 60).toString().padStart(2, '0')
    const slotEndHour = Math.floor(slotEndMinutes / 60)
      .toString()
      .padStart(2, '0')
    const slotEndMinute = (slotEndMinutes % 60).toString().padStart(2, '0')

    const slot = {
      service,
      date,
      startTime: `${slotStartHour}:${slotStartMinute}`,
      endTime: `${slotEndHour}:${slotEndMinute}`,
    }

    slots.push(slot)
  }
  const result = await Slot.create(slots)
  return result
}
export const ServiceServices = {
  createServiceIntoDB,
  getSingleServiceIntoDB,
  getAllServiceIntoDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
  createSlotFromDB,
}
