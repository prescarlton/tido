import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"
import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskBody,
} from "shared/types/tasks"

const updateTask = (params: GetTaskParams, body: UpdateTaskBody) =>
  ProjectService.put(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}`,
    body
  ).then((res) => res.data)

const useUpdateTask = (params: GetTaskParams) => {
  const queryClient = useQueryClient()
  return useMutation((body: UpdateTaskBody) => updateTask(params, body), {
    onSuccess: (res: GetTaskByIdResponse) => {
      notifications.show({
        message: "Successfully updated task",
        color: "green",
      })
      queryClient.setQueryData(TASKS_QUERY_KEY.detail(params.taskId), res.data)
    },
    onError: () => {
      notifications.show({
        message: "Unable to update task",
        color: "red",
      })
    },
  })
}
export default useUpdateTask
