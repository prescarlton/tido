import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"

import { createProject } from "@/api/ProjectService"
import { PROJECTS_QUERY_KEY } from "@/api/ProjectService/constants"
import {
  CREATE_PROJECT_QUERY_KEY,
  CreateProjectRequest,
} from "@/api/ProjectService/requests/createProject"

const useCreateProject = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: CREATE_PROJECT_QUERY_KEY,
    mutationFn: (data: CreateProjectRequest) => createProject(data),
    onError: (error: AxiosError) => {
      notifications.show({
        message: error?.message || "Unable to create project",
        color: "red",
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(PROJECTS_QUERY_KEY.all)
      notifications.show({
        message: "Project created successfully",
        color: "green",
      })
    },
  })
}

export default useCreateProject
