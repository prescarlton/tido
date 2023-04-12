import { DefaultListResponse, DefaultResponse } from "../api"
import { Board, BoardList } from "../boards"

export interface BoardListResponse extends DefaultListResponse {
  data: BoardList[]
}

export interface CreateBoardResponse extends DefaultResponse {
  data: Board
}
