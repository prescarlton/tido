import { DefaultResponse } from "../shared"
import { Task, TaskActivity, TaskDetails } from "."

export type ListTasksResponse = DefaultResponse<Task[]>
export type GetTaskByIdResponse = DefaultResponse<TaskDetails>
export type GetTaskActivityResponse = DefaultResponse<TaskActivity[]>
