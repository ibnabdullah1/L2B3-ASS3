import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'
import catchAsync from '../utils/catchAsync'

export const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Validation
    // If Everything is okay then return next function
    await schema.parseAsync({
      body: req.body,
    })
    next()
  })
}
