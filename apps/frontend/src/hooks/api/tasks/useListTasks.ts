import { useDebouncedValue } from "@mantine/hooks"
import { useQuery } from "@tanstack/react-query"
import {
  ListTasksParams,
  ListTasksQuery,
  ListTasksResponse,
} from "shared/types/tasks"

import ProjectService, { TASKS_QUERY_KEY } from "@/api/ProjectService"
import querify from "@/util/querify"

const listTasks = async (params: ListTasksParams, query: ListTasksQuery) =>
  ProjectService.get<ListTasksResponse>(
    `/${params.projectId}/boards/${params.boardId}/tasks${querify(query)}`
  ).then((res) => res.data.data)

const useListTasks = (params: ListTasksParams, query: ListTasksQuery) => {
  const [debounceSearch] = useDebouncedValue(query.search, 300)
  return useQuery(
    TASKS_QUERY_KEY.list({ ...params, ...query, search: debounceSearch }),
    () => listTasks(params, { ...query, search: debounceSearch })
  )
}

export default useListTasks
