import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ReviewServices } from './review.service'

const createReview: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review send successfully',
    data: result,
  })
})

const getAllReviews: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewServices.getAllReviewIntoDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Reviews retrieved successfully',
    data: result,
  })
})

export const ReviewControllers = {
  createReview,
  getAllReviews,
}
