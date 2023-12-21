import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateTagParams } from "shared/types/boards"
import { TaskTag } from "shared/types/tasks"

import ProjectService, {
  TAGS_QUERY_KEY,
  TASKS_QUERY_KEY,
  UPDATE_TAG_QUERY_KEY,
} from "@/api/ProjectService"
import useAppContext from "@/contexts/AppContext"

const deleteTag = (data: UpdateTagParams) =>
  ProjectService.delete(
    `/${data.projectId}/boards/${data.boardId}/tags/${data.tagId}`,
  ).then((res) => res.data.data)

const useDeleteTag = ({ tagId }: { tagId: number }) => {
  const { projectId, boardId } = useAppContext()
  if (!boardId || !projectId)
    throw new Error("Unable to delete a tag in this context")
  const queryClient = useQueryClient()

  return useMutation(
    UPDATE_TAG_QUERY_KEY,
    () => deleteTag({ projectId, boardId, tagId }),
    {
      onSuccess: () => {
        notifications.show({
          message: "Tag successfully deleted",
          color: "green",
        })
        queryClient.invalidateQueries(
          TASKS_QUERY_KEY.list({ projectId, boardId }),
        )
        queryClient.setQueryData<TaskTag[]>(
          TAGS_QUERY_KEY.list({ projectId, boardId }),
          (old) => old?.filter((tag) => tag.id != tagId),
        )
      },
      onError: () => {
        notifications.show({
          message: "Unable to delete tag",
          color: "red",
        })
      },
    },
  )
}

export default useDeleteTag
