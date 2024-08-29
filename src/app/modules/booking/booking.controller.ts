import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BookingServices } from './booking.service'

const createBooking: RequestHandler = catchAsync(async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).send({
      success: false,
      message: 'No token provided',
    })
  }
  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload
  const userEmail = decoded?.userEmail
  const reqData = req.body

  const result = await BookingServices.createBookingIntoDB(reqData, userEmail)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created successfully',
    data: result,
  })
})

const getAllBooking: RequestHandler = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingIntoDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bookings retrieved successfully',
    data: result,
  })
})

const getSingleBooking: RequestHandler = catchAsync(async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).send({
      success: false,
      message: 'No token provided',
    })
  }
  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload
  const userEmail = decoded?.userEmail
  const result = await BookingServices.getSingleBookingIntoDB(userEmail)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User bookings retrieved successfully',
    data: result,
  })
})

export const BookingControllers = {
  createBooking,
  getAllBooking,
  getSingleBooking,
}
