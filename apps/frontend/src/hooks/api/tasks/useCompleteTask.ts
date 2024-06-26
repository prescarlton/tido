import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CompleteTaskBody, CompleteTaskParams } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"
import { notifications } from "@mantine/notifications"

const completeTask = (params: CompleteTaskParams, body: CompleteTaskBody) =>
  ProjectService.put(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}/complete`,
    body
  ).then((res) => res.data.data)

const useCompleteTask = (params: CompleteTaskParams) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: CompleteTaskBody) => completeTask(params, body),
    onSuccess: () => {
      queryClient.invalidateQueries(
        TASKS_QUERY_KEY.list({
          projectId: params.projectId,
          boardId: params.boardId,
        })
      )
      notifications.show({
        message: "Task updated",
        color: "green",
      })
    },
  })
}

export default useCompleteTask
