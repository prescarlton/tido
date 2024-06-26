import { ShortUser } from "../users"

export interface Task {
  id: string
  name: string
  boardId: string | null
  complete: boolean
  createdBy: ShortUser
  code: number
  tags: TaskTag[]
  status: TaskStatus
}

export interface TaskStatus {
  id: number
  name: string
  color: string
}

export interface TaskTag {
  id: number
  name: string
  color: string
}

export interface TaskDetails extends Task {
  rawDescription: string | null
  textDescription: string | null
}
export interface TaskActivity {
  id: string
  taskId: string
  userId: string
  message?: string
  user: ShortUser
  created: string
  oldVal?: string
  newVal?: string
}

export interface TaskListFilters {
  tags?: string[]
}

export * from "./requests"
export * from "./responses"
