import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { SetMyActiveWorkspaceParams } from "shared/types/workspaces"

import {
  setMyActiveWorkspace,
  workspaceQueryKeys,
} from "@/api/WorkspaceService"

const useSetActiveWorkspace = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: SetMyActiveWorkspaceParams) =>
      setMyActiveWorkspace(data),
    onSuccess: (res) => {
      notifications.show({
        message: "Successfully Updated Active Workspace",
        color: "green",
      })
      // update that dern data
      queryClient.setQueryData(workspaceQueryKeys.active.queryKey, res)
      // navigate the user to the homepage and refetch errthang since they just switched
      navigate("/")
      queryClient.resetQueries()
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
