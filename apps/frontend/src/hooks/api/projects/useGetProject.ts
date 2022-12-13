import {
  getProjectById,
  GetProjectByIdRequest,
  Project,
} from '@/api/ProjectService/requests/getProjectById'
import { PROJECT_LIST_QUERY_KEY } from '@/api/ProjectService/requests/listProjects'
import { useQuery } from '@tanstack/react-query'

const useGetProjectById = (data: GetProjectByIdRequest) =>
  useQuery<Project>(
    PROJECT_LIST_QUERY_KEY.detail(data.id),
    () => getProjectById(data),
    {
      enabled: Boolean(data.id),
    }
  )

export default useGetProjectById
