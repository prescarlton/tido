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

export const CompleteTaskRequestSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
    boardId: z.string({ required_error: "Board ID is required" }),
    taskId: z.string({ required_error: "Task ID is required" }),
  }),
  body: z.object({
    complete: z.boolean({ required_error: "Complete is required" }),
  }),
}
export const DeleteTaskRequestSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
    boardId: z.string({ required_error: "Board ID is required" }),
    taskId: z.string({ required_error: "Task ID is required" }),
  }),
}

// PARAMS
export type ListTasksParams = z.infer<typeof ListTasksRequestSchema.params>
export type CreateTaskParams = z.infer<typeof CreateTaskRequestSchema.params>
export type CompleteTaskParams = z.infer<
  typeof CompleteTaskRequestSchema.params
>
export type DeleteTaskParams = z.infer<typeof DeleteTaskRequestSchema.params>
// BODY
export type CreateTaskBody = z.infer<typeof CreateTaskRequestSchema.body>
export type CompleteTaskBody = z.infer<typeof CompleteTaskRequestSchema.body>
// QUERY
