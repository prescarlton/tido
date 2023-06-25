export interface BoardList {
  id: string
  name: string
  // any is bad, but its ok here because we really only care about the #
  tasks: any[]
  color: string
}

export interface Board {
  id: string
  name: string
  projectId: string
}

export enum BoardView {
  Group = "GROUP",
  List = "LIST",
  Kanban = "KANBAN",
}

export * from "./responses"
export * from "./requests"
