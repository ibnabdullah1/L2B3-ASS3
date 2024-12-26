import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProjectServices } from './project.service'

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project created successfully',
    data: result,
  })
})
const getAllProjects: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsIntoDB()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects retrieved successfully',
    data: result,
  })
})
export const ProjectControllers = {
  createProject,
  getAllProjects,
}
