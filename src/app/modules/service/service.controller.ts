import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ServiceServices } from './service.service'
const createService: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceServices.createServiceIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service created successfully',
    data: result,
  })
})

export const ServiceControllers = {
  createService,
}
