import { useQuery } from "@tanstack/react-query"
import { GetTaskActivityResponse, GetTaskParams } from "shared/types/tasks"

import ProjectService, { TASK_ACTIVITY_QUERY_KEY } from "@/api/ProjectService"

const getTaskActivity = (params: Partial<GetTaskParams>) =>
  ProjectService.get<GetTaskActivityResponse>(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}/activity`,
  ).then((res) => res.data.data)

const useGetTaskActivity = (params: Partial<GetTaskParams>) =>
  useQuery({
    queryKey: TASK_ACTIVITY_QUERY_KEY.detail(params.taskId || ""),
    queryFn: () => getTaskActivity(params),
    enabled: Boolean(params.taskId),
  })

export default useGetTaskActivity
