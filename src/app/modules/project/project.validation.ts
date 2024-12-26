import { z } from "zod";

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name must be a string",
    }),
    details: z.string({
      invalid_type_error: "Details must be a string",
    }),
    image: z.string({
      invalid_type_error: "Image must be a string",
    }),
    category: z.string({
      invalid_type_error: "Category must be a string",
    }),
    github_link: z.string({
      invalid_type_error: "GitHub link must be a string",
    }).url("GitHub link must be a valid URL"),
    live_link: z.string({
      invalid_type_error: "Live link must be a string",
    }).url("Live link must be a valid URL"),
    tech_stack: z.array(
      z.string({
        invalid_type_error: "Each tech stack item must be a string",
      })
    ).nonempty("Tech stack must have at least one technology"),
    isDeleted: z.boolean().optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidationSchema,
};
