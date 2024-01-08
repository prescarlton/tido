import { useQuery } from "@tanstack/react-query"

import {
  listProjectMembers,
  PROJECT_MEMBERS_QUERY_KEY,
} from "@/api/ProjectService"
import useAppContext from "@/contexts/AppContext"

const useListProjectMembers = () => {
  const { projectId } = useAppContext()
  if (!projectId)
    throw new Error("This can only be used within the app context")

  return useQuery({
    queryKey: PROJECT_MEMBERS_QUERY_KEY.detail(projectId),
    queryFn: () => listProjectMembers({ projectId }),
    select: (res) => res.data.data,
  })
}
export default useListProjectMembers
