export interface BoardList {
  id: string
  name: string
  // any is bad, ok here because we really only care about the #
  tasks: any[]
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
