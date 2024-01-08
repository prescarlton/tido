import { useQuery } from "@tanstack/react-query"

import { workspaceQueryKeys } from "@/api/WorkspaceService"

const useListMyWorkspaces = () =>
  useQuery({ ...workspaceQueryKeys.my, select: (res) => res.data.data })

export default useListMyWorkspaces
