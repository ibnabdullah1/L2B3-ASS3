import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SlotServices } from './slot.service'

const getAvailableAllSlot: RequestHandler = catchAsync(async (req, res) => {
  const { date, serviceId } = req.query
  const result = await SlotServices.getAvailableSlots({
    date: date as string,
    serviceId: serviceId as string,
  })
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  })
})
const getAllSlots: RequestHandler = catchAsync(async (req, res) => {
  const result = await SlotServices.getAllSlots()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  })
})
const DeleteSlot: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await SlotServices.deleteSlotFromDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slot Deleted successfully',
    data: result,
  })
})

export const SlotControllers = {
  getAvailableAllSlot,
  getAllSlots,
  DeleteSlot,
}
