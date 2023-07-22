import { useQuery } from "@tanstack/react-query"
import { GetTaskByIdResponse, GetTaskParams } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const getTaskById = (params: GetTaskParams) =>
  ProjectService.get<GetTaskByIdResponse>(
    `/${params.projectId}/boards/${params.boardId}/tasks/${params.taskId}`
  ).then((res) => res.data.data)

const useGetTaskById = (params: GetTaskParams) =>
  useQuery(TASKS_QUERY_KEY.detail(params.taskId), () => getTaskById(params))

export default useGetTaskById
