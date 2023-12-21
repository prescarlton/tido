import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateTagBody, CreateTagParams } from "shared/types/boards"
import { TaskTag } from "shared/types/tasks"

import ProjectService, {
  CREATE_TAG_QUERY_KEY,
  TAGS_QUERY_KEY,
} from "@/api/ProjectService"
import useAppContext from "@/contexts/AppContext"

const createTag = (params: CreateTagParams, body: CreateTagBody) =>
  ProjectService.post(
    `/${params.projectId}/boards/${params.boardId}/tags`,
    body,
  ).then((res) => res.data.data)

const useCreateTag = () => {
  const { projectId, boardId } = useAppContext()
  const queryClient = useQueryClient()
  if (!boardId || !projectId)
    throw new Error("Unable to create a tag in this context.")

  return useMutation(
    CREATE_TAG_QUERY_KEY,
    (body: CreateTagBody) => createTag({ projectId, boardId }, body),
    {
      onSuccess: (data: TaskTag) => {
        notifications.show({
          message: "Tag created successfully",
          color: "green",
        })
        queryClient.setQueryData<TaskTag[]>(
          TAGS_QUERY_KEY.list({ projectId, boardId }),
          (old) => [...(old as TaskTag[]), data],
        )
      },
    },
  )
}

export default useCreateTag
