import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  Task,
  UpdateTaskTagsBody,
} from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const updateTaskTags = (params: GetTaskParams, body: UpdateTaskTagsBody) =>
  ProjectService.put(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}/tags`,
    body,
  ).then((res) => res.data)

const useUpdateTaskTags = (params: GetTaskParams) => {
  const queryClient = useQueryClient()
  const { projectId, boardId } = useParams()
  return useMutation({
    mutationFn: (body: UpdateTaskTagsBody) => updateTaskTags(params, body),
    onSuccess: (res: GetTaskByIdResponse) => {
      notifications.show({
        message: "Successfully updated task",
        color: "green",
      })
      queryClient.setQueryData(TASKS_QUERY_KEY.detail(params.taskId), res.data)

      queryClient.setQueryData<Task[]>(
        TASKS_QUERY_KEY.list({ projectId, boardId }),
        (old) => [
          res.data as Task,
          ...(old ? old.filter((task) => task.id !== res.data?.id) : []),
        ],
      )
    },
    onError: (_err) => {
      notifications.show({
        message: "Unable to update task",
        color: "red",
      })
    },
  })
}
export default useUpdateTaskTags
