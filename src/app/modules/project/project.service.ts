import { Project } from './project.model'

const createProjectIntoDB = async (req: any) => {
  const filePath = req?.file?.path
  if (filePath) {
    req.body.image = filePath
  }
  console.log(req.body)
  const result = await Project.create(req.body)
  return result
}
const getAllProjectsIntoDB = async () => {
  const result = await Project.find({ isDeleted: false })
  return result
}

export const ProjectServices = {
  getAllProjectsIntoDB,
  createProjectIntoDB,
}
