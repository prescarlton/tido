import { useQuery } from "@tanstack/react-query"

import { workspaceQueryKeys } from "@/api/WorkspaceService"

const useListWorkspaceUsers = () =>
  useQuery({ ...workspaceQueryKeys.users, select: (res) => res.data.data })
export default useListWorkspaceUsers
