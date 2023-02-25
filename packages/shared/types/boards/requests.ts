import { z } from 'zod'

export const GetBoardListSchema = {
  params: z.object({
    projectId: z.string({ required_error: 'Project ID is reauired' }),
  }),
}

export type GetBoardListParams = z.input<typeof GetBoardListSchema.params>

export const CreateBoardSchema = {
  params: z.object({
    projectId: z.string({ required_error: 'Project ID is required' }),
  }),
  body: z.object({
    name: z.string({ required_error: 'Board Name is required' }),
  }),
}

export type CreateBoardParams = z.input<typeof CreateBoardSchema.params>
export type CreateBoardBody = z.input<typeof CreateBoardSchema.body>
