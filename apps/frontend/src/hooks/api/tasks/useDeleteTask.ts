import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { CompleteTaskParams } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const deleteTask = (params: CompleteTaskParams) =>
  ProjectService.delete(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}`,
  ).then((res) => res.data.data)

const useDeleteTask = (taskId: string) => {
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => deleteTask({ boardId, projectId, taskId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TASKS_QUERY_KEY.list({
          projectId,
          boardId,
        }),
      })
      notifications.show({
        message: "Archived task",
        color: "green",
      })
    },
    onError: () => {
      notifications.show({
        message: "Unable to archive task",
        color: "red",
      })
    },
  })
}

export default useDeleteTask
