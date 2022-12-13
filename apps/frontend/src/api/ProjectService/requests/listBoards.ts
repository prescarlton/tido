import { createQueryKey } from '@/util/createQueryKey'
import ProjectService from '..'

export interface BoardListResponse {
  id: string
  name: string
}

export interface GetBoardListRequest {
  projectId: string
}

export const BOARD_LIST_QUERY_KEY = createQueryKey('boardList')

export const listBoards = async (data: GetBoardListRequest) =>
  ProjectService.get(`/${data.projectId}/boards`).then((res) => res.data.data)
