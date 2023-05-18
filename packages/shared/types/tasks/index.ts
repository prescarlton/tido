export interface Task {
  id: string
  name: string
  boardId: string
  completed: Boolean
}

export * from "./requests"
export * from "./responses"
