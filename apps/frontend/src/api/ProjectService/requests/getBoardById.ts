import ProjectService from ".."

export interface GetBoardByIdRequest {
  id: string
  projectId: string
}

export interface Task {
  id: string
  name: string
  description: string
}

export interface List {
  id: string
  name: string
  tasks: Task[]
}

export interface Board {
  id: string
  name: string
  projectId: string
  description: string
  lists: List[]
}

export const getBoardById = async (data: GetBoardByIdRequest) =>
  ProjectService.get(`/${data.projectId}/boards/${data.id}`).then(
    (res) => res.data.data
  )
