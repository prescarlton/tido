import { DefaultListResponse, DefaultResponse } from "../shared"
import { Board, BoardList } from "../boards"

export interface BoardListResponse extends DefaultListResponse {
  data: BoardList[]
}

export interface CreateBoardResponse extends DefaultResponse {
  data: Board
}

export type GetBoardByIdResponse = DefaultResponse<Board>
