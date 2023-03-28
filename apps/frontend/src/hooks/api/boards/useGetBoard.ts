import { useQuery } from '@tanstack/react-query'

import { BOARDS_QUERY_KEY } from '@/api/ProjectService'
import {
  getBoardById,
  GetBoardByIdRequest,
} from '@/api/ProjectService/requests/getBoardById'

const useGetBoard = (data: GetBoardByIdRequest) =>
  useQuery(BOARDS_QUERY_KEY.detail(data.id), () => getBoardById(data))

export default useGetBoard
