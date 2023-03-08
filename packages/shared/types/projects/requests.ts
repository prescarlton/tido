import { z } from 'zod'

export const GetProjectSchema = {
  params: z.object({
    projectId: z.string({ required_error: 'Project ID is required' }),
  }),
}

export const DeleteProjectSchema = {
  params: z.object({
    projectId: z.string({ required_error: 'Project ID is required' }),
  }),
}

export const UpdateGenProjSettingsSchema = {
  params: z.object({
    projectId: z.string({ required_error: 'Project ID is required' }),
  }),
  body: z.object({
    name: z.string({ required_error: 'Project Name is required' }),
    description: z.string().optional(),
  }),
}

export type GetProjectParams = z.input<typeof GetProjectSchema.params>
export type DeleteProjectParams = z.input<typeof DeleteProjectSchema.params>
export type UpdateGenProjSettingsParams = z.input<
  typeof UpdateGenProjSettingsSchema.params
>
export type UpdateGenProjSettingsBody = z.input<
  typeof UpdateGenProjSettingsSchema.body
>
