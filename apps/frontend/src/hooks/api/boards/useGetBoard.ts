import { useQuery } from "@tanstack/react-query"
import { GetBoardByIdParams, GetBoardByIdResponse } from "shared/types/boards"

import ProjectService, { BOARDS_QUERY_KEY } from "@/api/ProjectService"

export const getBoardById = async (data: GetBoardByIdParams) =>
  ProjectService.get<GetBoardByIdResponse>(
    `/${data.projectId}/boards/${data.id}`,
  ).then((res) => res.data.data)

const useGetBoard = (data: GetBoardByIdParams) =>
  useQuery({
    queryKey: BOARDS_QUERY_KEY.detail(data.id),
    queryFn: () => getBoardById(data),
  })

export default useGetBoard
