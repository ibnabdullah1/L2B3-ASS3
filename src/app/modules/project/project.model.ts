import { Schema, model } from 'mongoose'
import { TProject } from './project.interface'

const projectSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    github_link: {
      type: String,
      required: true,
    },
    live_link: {
      type: String,
      required: true,
    },
    tech_stack: {
      type: [String],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const Project = model<TProject>('Project', projectSchema)
