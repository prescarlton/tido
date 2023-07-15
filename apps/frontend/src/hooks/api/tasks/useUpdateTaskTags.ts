import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskTagsBody,
} from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const updateTaskTags = (params: GetTaskParams, body: UpdateTaskTagsBody) =>
  ProjectService.put(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}/tags`,
    body
  ).then((res) => res.data)

const useUpdateTaskTags = (params: GetTaskParams) => {
  const queryClient = useQueryClient()
  return useMutation(
    (body: UpdateTaskTagsBody) => updateTaskTags(params, body),
    {
      onSuccess: (res: GetTaskByIdResponse) => {
        notifications.show({
          message: "Successfully updated task",
          color: "green",
        })
        queryClient.setQueryData(
          TASKS_QUERY_KEY.detail(params.taskId),
          res.data
        )
      },
      onError: () => {
        notifications.show({
          message: "Unable to update task",
          color: "red",
        })
      },
    }
  )
}
export default useUpdateTaskTags
