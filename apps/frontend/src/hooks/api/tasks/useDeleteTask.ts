import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { CompleteTaskParams } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"
import useSnackbarContext from "@/contexts/SnackbarContext"

const deleteTask = (params: CompleteTaskParams) =>
  ProjectService.delete(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}`
  ).then((res) => res.data.data)

const useDeleteTask = (taskId: string) => {
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }
  const queryClient = useQueryClient()
  const { openSnackbar } = useSnackbarContext()
  return useMutation({
    mutationFn: () => deleteTask({ boardId, projectId, taskId }),
    onSuccess: () => {
      queryClient.invalidateQueries(
        TASKS_QUERY_KEY.list({
          projectId,
          boardId,
        })
      )
      openSnackbar({
        message: "Deleted task",
        type: "success",
      })
    },
    onError: () => {
      openSnackbar({
        message: "Unable to delete task",
        type: "error",
      })
    },
  })
}

export default useDeleteTask
