import { useQuery } from "@tanstack/react-query"
import { GetProjectParams, GetProjectResponse } from "shared/types/projects"

import ProjectService, { PROJECTS_QUERY_KEY } from "@/api/ProjectService"

const getProjectById = (data: GetProjectParams) =>
  ProjectService.get<GetProjectResponse>(`/${data.projectId}`)

const useGetProjectById = (data: GetProjectParams) => {
  return useQuery({
    queryKey: PROJECTS_QUERY_KEY.detail(data.projectId),
    queryFn: () => getProjectById(data),
    select: (res) => res.data.data,
    enabled: Boolean(data.projectId),
  })
}

export default useGetProjectById
