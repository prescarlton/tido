import { useQuery } from "@tanstack/react-query"
import { GetBoardByIdParams } from "shared/types/boards"

import { listTaskStatuses, TASK_STATUSES_QUERY_KEY } from "@/api/ProjectService"

const useListTaskStatuses = (data: GetBoardByIdParams) =>
  useQuery({
    queryKey: TASK_STATUSES_QUERY_KEY.detail(data.id),
    queryFn: () => listTaskStatuses(data),
    select: (res) => res.data.data,
  })

export default useListTaskStatuses
