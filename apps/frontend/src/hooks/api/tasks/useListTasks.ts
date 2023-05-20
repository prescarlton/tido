import { useQuery } from "@tanstack/react-query"
import { ListTasksParams, ListTasksResponse } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const listTasks = async (params: ListTasksParams) =>
  ProjectService.get<ListTasksResponse>(
    `/${params.projectId}/boards/${params.boardId}/tasks`
  ).then((res) => res.data.data)

const useListTasks = (params: ListTasksParams) =>
  useQuery(TASKS_QUERY_KEY.list(params), () => listTasks(params))

export default useListTasks
