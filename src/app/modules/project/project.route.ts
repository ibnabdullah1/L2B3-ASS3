import express, { NextFunction, Request, Response } from 'express'
import { multerUpload } from '../../config/multer.config'
import { ProjectControllers } from './project.controller'

const router = express.Router()

router.post(
  '/create',
  multerUpload.single('image'),
  // auth('admin'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    return ProjectControllers.createProject(req, res, next)
  },
)
export const ProjectRoutes = router
