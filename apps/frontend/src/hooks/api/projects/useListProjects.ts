import { useQuery } from "@tanstack/react-query"
import { ProjectListResponse } from "shared/types/projects"

import ProjectService, { PROJECTS_QUERY_KEY } from "@/api/ProjectService"

const getProjectList = () => ProjectService.get<ProjectListResponse>("/")

const useListProjects = () =>
  useQuery({
    queryKey: PROJECTS_QUERY_KEY.all,
    queryFn: getProjectList,
    select: (res) => res.data.data,
  })

export default useListProjects
