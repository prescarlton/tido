import {
  BoardListResponse,
  BOARD_LIST_QUERY_KEY,
  GetBoardListRequest,
  listBoards,
} from '@/api/ProjectService/requests/listBoards'
import { useQuery } from '@tanstack/react-query'

const useListBoards = (data: GetBoardListRequest) =>
  useQuery<BoardListResponse[]>(BOARD_LIST_QUERY_KEY.list(data), () =>
    listBoards(data)
  )

export default useListBoards
