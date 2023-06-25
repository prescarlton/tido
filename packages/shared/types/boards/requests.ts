import { z } from "zod"

// GET
export const GetBoardListSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is reauired" }),
  }),
}
export const GetBoardByIdRequestSchema = {
  params: z.object({
    id: z.string({ required_error: "Board ID is required" }),
    projectId: z.string({ required_error: "Project ID is required" }),
  }),
}

// POST
export const CreateBoardSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
  }),
  body: z.object({
    name: z.string({ required_error: "Board Name is required" }),
    color: z.string({ required_error: "Board Color is required" }),
  }),
}

// PUT
export const RenameBoardSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
    boardId: z.string({ required_error: "Board ID is required" }),
  }),
  body: z.object({
    name: z.string({ required_error: "Board Name is required" }),
  }),
}

// Params
export type CreateBoardParams = z.infer<typeof CreateBoardSchema.params>
export type GetBoardListParams = z.infer<typeof GetBoardListSchema.params>
export type RenameBoardParams = z.infer<typeof RenameBoardSchema.params>
export type GetBoardByIdParams = z.infer<
  typeof GetBoardByIdRequestSchema.params
>

// Body
export type CreateBoardBody = z.infer<typeof CreateBoardSchema.body>
export type RenameBoardBody = z.infer<typeof RenameBoardSchema.body>
