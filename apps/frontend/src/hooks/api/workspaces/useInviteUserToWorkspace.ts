import { notifications } from "@mantine/notifications"
import { useMutation } from "@tanstack/react-query"
import { InviteUserToWorkspaceBody } from "shared/types/workspaces"

import { inviteUserToWorkspace } from "@/api/WorkspaceService"

const useInviteUserToWorkspace = () => {
  return useMutation({
    mutationFn: (data: InviteUserToWorkspaceBody) =>
      inviteUserToWorkspace(data),
    onSuccess: () => {
      notifications.show({
        message: "Successfully Invited User ",
        color: "green",
      })
    },
    onError: (err) => {
      notifications.show({
        message: err.message || "Unable to invite user",
        color: "red",
      })
    },
  })
}
export default useInviteUserToWorkspace
