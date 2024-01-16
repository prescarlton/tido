import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskBody,
} from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const updateTask = (params: Partial<GetTaskParams>, body: UpdateTaskBody) =>
  ProjectService.put(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}`,
    body,
  ).then((res) => res.data)

const useUpdateTask = (params: Partial<GetTaskParams>) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: UpdateTaskBody) => updateTask(params, body),
    onSuccess: (res: GetTaskByIdResponse) => {
      notifications.show({
        message: "Successfully updated task",
        color: "green",
      })
      queryClient.setQueryData(
        TASKS_QUERY_KEY.detail(params.taskId || ""),
        res.data,
      )
      queryClient.refetchQueries({ queryKey: TASKS_QUERY_KEY.all })
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
