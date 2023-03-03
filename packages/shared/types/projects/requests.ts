import { z } from 'zod'

export const GetProjectSchema = {
  params: z.object({
    id: z.string({ required_error: 'Project ID is required' }),
  }),
}

export const DeleteProjectSchema = {
  params: z.object({
    id: z.string({ required_error: 'Project ID is required' }),
  }),
}

export type GetProjectParams = z.input<typeof GetProjectSchema.params>
export type DeleteProjectParams = z.input<typeof DeleteProjectSchema.params>
