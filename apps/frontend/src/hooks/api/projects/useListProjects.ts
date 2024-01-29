import { useQuery } from "@tanstack/react-query"
import { ProjectListResponse } from "shared/types/projects"

import ProjectService, { PROJECTS_QUERY_KEY } from "@/api/ProjectService"
import useAppContext from "@/contexts/AppContext"

const getProjectList = () => ProjectService.get<ProjectListResponse>("/")

const useListProjects = () => {
  const { activeWorkspaceId } = useAppContext()
  return useQuery({
    queryKey: PROJECTS_QUERY_KEY.list({ activeWorkspaceId }),
    queryFn: getProjectList,
    select: (res) => res.data.data,
  })
}

export default useListProjects
