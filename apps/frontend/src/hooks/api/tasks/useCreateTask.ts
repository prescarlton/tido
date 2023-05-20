import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateTaskBody, CreateTaskParams } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"
import useSnackbarContext from "@/contexts/SnackbarContext"

const createTask = async (params: CreateTaskParams, body: CreateTaskBody) =>
  ProjectService.post(
    `/${params.projectId}/boards/${params.boardId}/tasks`,
    body
  ).then((res) => res.data.data)

const useCreateTask = (params: CreateTaskParams) => {
  const { openSnackbar } = useSnackbarContext()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: CreateTaskBody) => createTask(params, body),
    onSuccess: () => {
      openSnackbar({
        message: "Task Created",
        type: "success",
      })
      queryClient.invalidateQueries(TASKS_QUERY_KEY.list(params))
    },
    onError: () => {
      openSnackbar({
        message: "Unable to create task",
        type: "error",
      })
    },
  })
}
export default useCreateTask
