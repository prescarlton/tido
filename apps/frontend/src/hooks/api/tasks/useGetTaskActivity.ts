import { useQuery } from "@tanstack/react-query"
import { GetTaskActivityResponse, GetTaskParams } from "shared/types/tasks"

import ProjectService, { TASK_ACTIVITY_QUERY_KEY } from "@/api/ProjectService"

const getTaskActivity = (params: GetTaskParams) =>
  ProjectService.get<GetTaskActivityResponse>(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}/activity`
  ).then((res) => res.data.data)

const useGetTaskActivity = (params: GetTaskParams) =>
  useQuery(TASK_ACTIVITY_QUERY_KEY.detail(params.taskId), () =>
    getTaskActivity(params)
  )

export default useGetTaskActivity
