import ProjectService from ".."

export interface CreateBoardRequest {
  name: string
  projectId: string
}

export interface CreateBoardResponse {
  id: string
  name: string
  projectId: string
}

export const CREATE_BOARD_QUERY_KEY = ["createBoard"]

export const createBoard = (data: CreateBoardRequest) =>
  ProjectService.post(`/${data.projectId}/boards`, data).then(
    (res) => res.data.data
  )
