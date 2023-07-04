import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateTaskBody, CreateTaskParams } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const createTask = async (params: CreateTaskParams, body: CreateTaskBody) =>
  ProjectService.post(
    `/${params.projectId}/boards/${params.boardId}/tasks`,
    body
  ).then((res) => res.data.data)

const useCreateTask = (params: CreateTaskParams) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: CreateTaskBody) => createTask(params, body),
    onSuccess: () => {
      notifications.show({
        message: "Task Created",
        color: "green",
      })
      queryClient.invalidateQueries(TASKS_QUERY_KEY.list(params))
    },
    onError: () => {
      notifications.show({
        message: "Unable to create task",
        color: "red",
      })
    },
  })
}
export default useCreateTask
