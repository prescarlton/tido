import { useQuery } from '@tanstack/react-query'

import {
  getBoardById,
  GetBoardByIdRequest,
} from '@/api/ProjectService/requests/getBoardById'
import { BOARD_LIST_QUERY_KEY } from '@/api/ProjectService/requests/listBoards'

const useGetBoard = (data: GetBoardByIdRequest) =>
  useQuery(BOARD_LIST_QUERY_KEY.detail(data.id), () => getBoardById(data))

export default useGetBoard
