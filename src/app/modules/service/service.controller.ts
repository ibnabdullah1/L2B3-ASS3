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

const getSingleService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id

  const result = await ServiceServices.getSingleServiceIntoDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service retrieved successfully',
    data: result,
  })
})
const getAllService: RequestHandler = catchAsync(async (req, res) => {
  const result = await ServiceServices.getAllServiceIntoDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services retrieved successfully',
    data: result,
  })
})

const updateService: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id

  const result = await ServiceServices.updateServiceIntoDB(id, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services updated successfully',
    data: result,
  })
})
const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ServiceServices.deleteServiceFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: result,
  })
})

const createSlot = catchAsync(async (req, res) => {
  const result = await ServiceServices.createSlotFromDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  })
})

export const ServiceControllers = {
  createService,
  getSingleService,
  getAllService,
  updateService,
  deleteService,
  createSlot,
}
