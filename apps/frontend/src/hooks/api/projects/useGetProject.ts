import { useQuery } from "@tanstack/react-query"
import { GetProjectParams, GetProjectResponse } from "shared/types/projects"

import ProjectService from "@/api/ProjectService"
import { PROJECTS_QUERY_KEY } from "@/api/ProjectService"

const getProjectById = async (data: GetProjectParams) =>
  ProjectService.get<GetProjectResponse>(`/${data.projectId}`).then(
    (res) => res.data.data
  )

const useGetProjectById = (data: GetProjectParams) => {
  return useQuery(
    PROJECTS_QUERY_KEY.detail(data.projectId),
    () => getProjectById(data),
    {
      enabled: Boolean(data.projectId),
    }
  )
}

export default useGetProjectById
