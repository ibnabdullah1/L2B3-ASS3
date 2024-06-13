import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SlotServices } from './slot.service'

const getAllSlot: RequestHandler = catchAsync(async (req, res) => {
  const { date, serviceId } = req.query
  const result = await SlotServices.getAvailableSlots({
    date: date as string,
    serviceId: serviceId as string,
  })
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  })
})

export const SlotControllers = {
  getAllSlot,
}
