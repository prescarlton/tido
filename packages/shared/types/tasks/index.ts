export interface Task {
  id: string
  name: string
  boardId: string
  complete: boolean
}

export * from "./requests"
export * from "./responses"
