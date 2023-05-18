import { z } from "zod"

export const ListTasksRequestSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
    boardId: z.string({ required_error: "Board ID is required" }),
  }),
}

export const CreateTaskRequestSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
    boardId: z.string({ required_error: "Board ID is required" }),
  }),
  body: z.object({
    name: z.string({ required_error: "Task name is required" }),
  }),
}

// PARAMS
export type ListTasksParams = z.infer<typeof ListTasksRequestSchema.params>
export type CreateTaskParams = z.infer<typeof CreateTaskRequestSchema.params>
// BODY
export type CreateTaskBody = z.infer<typeof CreateTaskRequestSchema.body>
// QUERY
