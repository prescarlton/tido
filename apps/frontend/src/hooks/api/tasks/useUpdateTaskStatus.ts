import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  GetTaskByIdResponse,
  GetTaskParams,
  UpdateTaskBody,
} from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const updateTask = (data: UpdateTaskBody & GetTaskParams) =>
  ProjectService.put(
    `/${data.projectId}/boards/${data.boardId}/tasks/${data.taskId}`,
    data,
  ).then((res) => res.data)

const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: UpdateTaskBody & GetTaskParams) => updateTask(data),
    onSuccess: (res: GetTaskByIdResponse) => {
      notifications.show({
        message: "Successfully updated task",
        color: "green",
      })
      queryClient.setQueryData(
        TASKS_QUERY_KEY.detail(res.data?.id as string),
        res.data,
      )
    },
    onError: () => {
      notifications.show({
        message: "Unable to update task",
        color: "red",
      })
    },
  })
}
export default useUpdateTaskStatus
