import { useQuery } from "@tanstack/react-query"
import { GetBoardByIdParams, ListTagsResponse } from "shared/types/boards"

import ProjectService, { TAGS_QUERY_KEY } from "@/api/ProjectService"

const listBoardTags = async (data: GetBoardByIdParams) =>
  ProjectService.get<ListTagsResponse>(
    `/${data.projectId}/boards/${data.id}/tags`
  ).then((res) => res.data.data)

const useListBoardTags = (data: GetBoardByIdParams) =>
  useQuery(
    TAGS_QUERY_KEY.list({ projectId: data.projectId, boardId: data.id }),
    () => listBoardTags(data)
  )

export default useListBoardTags
