import { z } from "zod"

export const ListTasksRequestSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
    boardId: z.string({ required_error: "Board ID is required" }),
  }),
  query: z.object({
    search: z.string().optional(),
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
export const GetTaskRequestSchema = {
  params: z.object({
    projectId: z.string({ required_error: "Project ID is required" }),
    boardId: z.string({ required_error: "Board ID is required" }),
    taskId: z.string({ required_error: "Task ID is required" }),
  }),
}

export const UpdateTaskRequestSchema = {
  params: GetTaskRequestSchema.params,
  body: z.object({
    rawDescription: z.string().optional(),
    name: z.string().optional(),
    status: z.string().optional(),
  }),
}

export const UpdateTaskTagsSchema = {
  params: GetTaskRequestSchema.params,
  body: z.object({
    tags: z.array(z.string()),
  }),
}

// PARAMS
export type ListTasksParams = z.infer<typeof ListTasksRequestSchema.params>
export type CreateTaskParams = z.infer<typeof CreateTaskRequestSchema.params>
export type CompleteTaskParams = z.infer<
  typeof CompleteTaskRequestSchema.params
>
export type GetTaskParams = z.infer<typeof GetTaskRequestSchema.params>
export type UpdateTaskTagsParams = z.infer<typeof UpdateTaskTagsSchema.params>
// BODY
export type CreateTaskBody = z.infer<typeof CreateTaskRequestSchema.body>
export type CompleteTaskBody = z.infer<typeof CompleteTaskRequestSchema.body>
export type UpdateTaskBody = z.infer<typeof UpdateTaskRequestSchema.body>
export type UpdateTaskTagsBody = z.infer<typeof UpdateTaskTagsSchema.body>
// QUERY
export type ListTasksQuery = z.infer<typeof ListTasksRequestSchema.query>
