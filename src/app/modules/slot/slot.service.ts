import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Service, Slot } from '../service/service.model'
import { isValidDateFormat } from '../service/service.utils'
import { GetAvailableSlotsParams } from './slot.interface'

const getAvailableSlots = async ({
  date,
  serviceId,
}: GetAvailableSlotsParams) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: any = { isBooked: 'available' }

  if (date) {
    if (!isValidDateFormat(date)) {
      throw new AppError(
        httpStatus.CONFLICT,
        'Invalid date format. Please use YYYY-MM-DD.',
      )
    }
    filter.date = date
  }

  if (serviceId) {
    const isServiceExist = await Service.findOne({ _id: serviceId })

    if (!isServiceExist) {
      throw new AppError(httpStatus.NOT_FOUND, 'Service not found')
    }
    if (isServiceExist.isDeleted) {
      throw new AppError(httpStatus.NOT_FOUND, 'Service is deleted')
    }

    filter.service = serviceId
  }
  const availableSlots = await Slot.find(filter).populate('service')

  return availableSlots
}
const getAllSlots = async () => {
  const result = await Slot.find().populate('service')

  return result
}
const deleteSlotFromDB = async (id: string) => {
  const result = await Slot.deleteOne({ _id: id })

  return result
}
export const SlotServices = {
  getAvailableSlots,
  getAllSlots,
  deleteSlotFromDB,
}
