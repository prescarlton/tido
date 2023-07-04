import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"

import ProjectService from "@/api/ProjectService"
import { PROJECTS_QUERY_KEY } from "@/api/ProjectService/constants"
import {
  CREATE_PROJECT_QUERY_KEY,
  CreateProjectRequest,
} from "@/api/ProjectService/requests/createProject"

const createProject = (data: CreateProjectRequest) =>
  ProjectService.post("/", data).then((res) => res.data.data)

const useCreateProject = () => {
  const queryClient = useQueryClient()

  return useMutation(
    CREATE_PROJECT_QUERY_KEY,
    (data: CreateProjectRequest) => createProject(data),
    {
      onError: (error: AxiosError) => {
        console.error(error)
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
    }
  )
}

export default useCreateProject
