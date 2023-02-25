import { useQuery } from '@tanstack/react-query'

import { BOARD_LIST_QUERY_KEY } from '@/api/ProjectService'
import {
  getBoardById,
  GetBoardByIdRequest,
} from '@/api/ProjectService/requests/getBoardById'

const useGetBoard = (data: GetBoardByIdRequest) =>
  useQuery(BOARD_LIST_QUERY_KEY.detail(data.id), () => getBoardById(data))

export default useGetBoard
