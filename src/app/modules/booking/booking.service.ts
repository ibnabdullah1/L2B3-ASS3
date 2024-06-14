import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Service, Slot } from '../service/service.model'
import { User } from '../user/use.model'
import { TBooking } from './booking.interface'
import { Booking } from './booking.model'

const createBookingIntoDB = async (payload: TBooking, userEmail: string) => {
  const { serviceId, slotId } = payload as any

  const [isUserExist, isServiceExist, isSlotExist] = await Promise.all([
    User.findOne({ email: userEmail }),
    Service.findById(serviceId),
    Slot.findById(slotId),
  ])

  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found, Please try again')
  }
  if (!isServiceExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Service not found, Please provide a valid serviceId',
    )
  }
  if (!isSlotExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Slot not found, Please provide a valid SlotId',
    )
  }
  if (isSlotExist.service.toString() !== serviceId.toString()) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'The service ID that you have given does not match with the service in the slot',
    )
  }

  const mainData = {
    customer: isUserExist._id,
    service: serviceId,
    slot: slotId,
    vehicleType: payload.vehicleType,
    vehicleBrand: payload.vehicleBrand,
    vehicleModel: payload.vehicleModel,
    manufacturingYear: payload.manufacturingYear,
    registrationPlate: payload.registrationPlate,
  }

  const result = await Booking.create(mainData)
  await (
    await (await result.populate('customer')).populate('service')
  ).populate('slot')

  return result
}

const getAllBookingIntoDB = async () => {
  // const result = await Booking.find()
  const result = await Booking.find({ isDeleted: false })
  return result
}
const getSingleBookingIntoDB = async (_id: string) => {
  const result = await Booking.findOne({ _id })
  return result
}
const updateSingleBookingIntoDB = async (
  _id: string,
  payload: Partial<TBooking>,
) => {
  const result = 'hello world'
  return result
}

export const BookingServices = {
  createBookingIntoDB,
  getSingleBookingIntoDB,
  getAllBookingIntoDB,
  updateSingleBookingIntoDB,
}
