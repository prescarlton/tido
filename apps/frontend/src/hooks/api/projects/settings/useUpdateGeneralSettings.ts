import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { UpdateGenProjSettingsBody } from "shared/types/projects"

import ProjectService, { PROJECTS_QUERY_KEY } from "@/api/ProjectService"

const updateGenProjSettings = (
  projectId: string,
  body: UpdateGenProjSettingsBody,
) =>
  ProjectService.put(`/${projectId}/settings/general`, body).then(
    (res) => res.data.data,
  )

const useUpdateGenProjSettings = () => {
  const { projectId } = useParams()
  const queryClient = useQueryClient()
  if (!projectId) throw new Error("Project ID not found")

  return useMutation({
    mutationFn: (body: UpdateGenProjSettingsBody) =>
      updateGenProjSettings(projectId, body),
    onSuccess: () => {
      notifications.show({
        message: "Successfully updated project settings",
        color: "green",
      })
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY.all })
    },
    onError: () => {
      notifications.show({
        message: "Failed to update project settings",
        color: "red",
      })
    },
  })
}

export default useUpdateGenProjSettings
