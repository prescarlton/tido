import { z } from "zod"

export const GetProjectSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
  }),
}

export const DeleteProjectSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
  }),
}

export const UpdateGenProjSettingsSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
  }),
  body: z.object({
    name: z.string({ required_error: "Project Name is required" }),
    description: z.string().optional(),
  }),
}

export const CreateProjectSchema = {
  body: z.object({
    name: z.string().nonempty({ message: "Proejct Name is required" }),
  }),
}

export type GetProjectParams = z.infer<typeof GetProjectSchema.params>
export type DeleteProjectParams = z.infer<typeof DeleteProjectSchema.params>
export type UpdateGenProjSettingsParams = z.infer<
  typeof UpdateGenProjSettingsSchema.params
>
export type UpdateGenProjSettingsBody = z.infer<
  typeof UpdateGenProjSettingsSchema.body
>
export type CreateProjectBody = z.infer<typeof CreateProjectSchema.body>
