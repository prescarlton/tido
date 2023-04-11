export interface BoardList {
  id: string
  name: string
}

export interface Board {
  id: string
  name: string
  projectId: string
}

export enum BoardView {
  Table = "TABLE",
  List = "LIST",
  Kanban = "KANBAN",
}

export * from "./responses"
export * from "./requests"
