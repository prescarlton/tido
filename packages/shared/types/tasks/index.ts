import { ShortUser } from "../users"

export interface Task {
  id: string
  name: string
  boardId: string
  complete: boolean
  createdBy: ShortUser
  code: number
}

export interface TaskTag {
  id: string
  name: string
  color: string
}

export interface TaskDetails extends Task {
  description: string | null
  tags: TaskTag[]
}

export * from "./requests"
export * from "./responses"
