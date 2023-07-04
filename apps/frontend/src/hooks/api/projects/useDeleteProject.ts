import { notifications } from "@mantine/notifications"
import { useMutation } from "@tanstack/react-query"
import { DeleteProjectParams } from "shared/types/projects"

import ProjectService, { DELETE_PROJECT_QUERY_KEY } from "@/api/ProjectService"

const deleteProject = (data: DeleteProjectParams) =>
  ProjectService.delete(`/${data.projectId}`).then((res) => res.data.data)

const useDeleteProject = () => {
  return useMutation(
    DELETE_PROJECT_QUERY_KEY,
    (data: DeleteProjectParams) => deleteProject(data),
    {
      onSuccess: () => {
        notifications.show({
          message: "Project successfully deleted",
          color: "green",
        })
      },
      onError: () => {
        notifications.show({
          message: "Unable to delete project",
          color: "red",
        })
      },
    }
  )
}

export default useDeleteProject
