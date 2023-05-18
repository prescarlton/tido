import { useQuery } from "@tanstack/react-query"
import { ListTasksParams, ListTasksResponse } from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"

const listTasks = async (data: ListTasksParams) =>
  ProjectService.get<ListTasksResponse>(
    `/${data.projectId}/boards/${data.boardId}/tasks`
  ).then((res) => res.data.data)

const useListTasks = (data: ListTasksParams) =>
  useQuery(TASKS_QUERY_KEY.list(data), () => listTasks(data))

export default useListTasks
