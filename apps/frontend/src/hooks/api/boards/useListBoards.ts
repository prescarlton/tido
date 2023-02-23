import { useQuery } from '@tanstack/react-query'

import {
  BOARD_LIST_QUERY_KEY,
  BoardListResponse,
  GetBoardListRequest,
  listBoards,
} from '@/api/ProjectService/requests/listBoards'

const useListBoards = (data: GetBoardListRequest) =>
  useQuery<BoardListResponse[]>(BOARD_LIST_QUERY_KEY.list(data), () =>
    listBoards(data)
  )

export default useListBoards
