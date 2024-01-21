import { useQuery } from "@tanstack/react-query"

import { workspaceQueryKeys } from "@/api/WorkspaceService"

const useGetActiveWorkspace = () =>
  useQuery({ ...workspaceQueryKeys.active, select: (res) => res.data.data })

export default useGetActiveWorkspace
