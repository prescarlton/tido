import { useQuery } from "@tanstack/react-query"
import { BoardListResponse, GetBoardListParams } from "shared/types/boards"

import ProjectService from "@/api/ProjectService"
import { BOARDS_QUERY_KEY } from "@/api/ProjectService/constants"

const listBoards = async (data: GetBoardListParams) =>
  ProjectService.get<BoardListResponse>(`/${data.projectId}/boards`).then(
    (res) => res.data.data,
  )

const useListBoards = (data: GetBoardListParams) =>
  useQuery({
    queryKey: BOARDS_QUERY_KEY.list(data),
    queryFn: () => listBoards(data),
  })

export default useListBoards
