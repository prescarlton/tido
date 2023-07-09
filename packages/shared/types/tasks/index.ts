import { ShortUser } from "../users"

export interface Task {
  id: string
  name: string
  boardId: string
  complete: boolean
  createdBy: ShortUser
  code: number
}

export interface TaskDetails extends Task {
  description: string | null
}

export * from "./requests"
export * from "./responses"
