import { DefaultListResponse, DefaultResponse } from "../shared"
import { Board, BoardList } from "../boards"
import { TaskTag } from "../tasks"

export interface BoardListResponse extends DefaultListResponse {
  data: BoardList[]
}

export interface CreateBoardResponse extends DefaultResponse {
  data: Board
}

export type GetBoardByIdResponse = DefaultResponse<Board>
export type ListTagsResponse = DefaultResponse<TaskTag[]>
export type CreateTagResponse = DefaultResponse<TaskTag>
