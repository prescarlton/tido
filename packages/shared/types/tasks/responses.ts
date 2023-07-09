import { DefaultResponse } from "../shared"
import { Task, TaskDetails } from "."

export type ListTasksResponse = DefaultResponse<Task[]>
export type GetTaskByIdResponse = DefaultResponse<TaskDetails>
