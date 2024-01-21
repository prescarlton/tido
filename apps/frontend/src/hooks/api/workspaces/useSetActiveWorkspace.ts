import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { SetMyActiveWorkspaceParams } from "shared/types/workspaces"

import {
  setMyActiveWorkspace,
  workspaceQueryKeys,
} from "@/api/WorkspaceService"

const useSetActiveWorkspace = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: SetMyActiveWorkspaceParams) =>
      setMyActiveWorkspace(data),
    onSuccess: (res) => {
      notifications.show({
        message: "Successfully Updated Active Workspace",
        color: "green",
      })
      queryClient.setQueryData(workspaceQueryKeys.active.queryKey, {
        id: res.data.id,
        name: res.data.name,
      })
    },
    onError: (err) => {
      notifications.show({
        message: err.message || "Unable to update active workspace",
        color: "red",
      })
    },
  })
}
export default useSetActiveWorkspace
