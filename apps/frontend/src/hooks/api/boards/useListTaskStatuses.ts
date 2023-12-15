import { useQuery } from "@tanstack/react-query"
import { GetProjectParams } from "shared/types/projects"

import { listTaskStatuses, TASK_STATUSES_QUERY_KEY } from "@/api/ProjectService"

const useListTaskStatuses = (data: GetProjectParams) =>
  useQuery({
    queryKey: TASK_STATUSES_QUERY_KEY.detail(data.projectId),
    queryFn: () => listTaskStatuses(data),
    select: (res) => res.data.data,
  })

export default useListTaskStatuses
