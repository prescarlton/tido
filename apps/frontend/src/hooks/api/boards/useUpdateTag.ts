import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateTagBody, UpdateTagParams } from "shared/types/boards"
import { TaskTag } from "shared/types/tasks"

import ProjectService, {
  TAGS_QUERY_KEY,
  UPDATE_TAG_QUERY_KEY,
} from "@/api/ProjectService"
import useAppContext from "@/contexts/AppContext"

const updateTag = (params: UpdateTagParams, body: UpdateTagBody) =>
  ProjectService.put(
    `/${params.projectId}/boards/${params.boardId}/tags/${params.tagId}`,
    body,
  ).then((res) => res.data.data)

const useUpdateTag = ({ tagId }: { tagId: number }) => {
  const { projectId, boardId } = useAppContext()
  if (!boardId || !projectId)
    throw new Error("Unable to update a tag in this context")
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: UPDATE_TAG_QUERY_KEY,
    mutationFn: (body: UpdateTagBody) =>
      updateTag({ projectId, boardId, tagId }, body),
    onSuccess: (data: TaskTag) => {
      notifications.show({
        message: "Tag successfully updated",
        color: "green",
      })
      // update the tag list to include the updated tag
      queryClient.setQueryData<TaskTag[]>(
        TAGS_QUERY_KEY.list({ projectId, boardId }),
        (old) => [
          ...(old as TaskTag[]).filter((tag) => tag.id != data.id),
          data,
        ],
      )
    },
  })
}
export default useUpdateTag
