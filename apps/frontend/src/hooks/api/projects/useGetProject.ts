import { useQuery } from '@tanstack/react-query'

import { PROJECT_LIST_QUERY_KEY } from '@/api/ProjectService/constants'
import {
  getProjectById,
  GetProjectByIdRequest,
  Project,
} from '@/api/ProjectService/requests/getProjectById'

const useGetProjectById = (data: GetProjectByIdRequest) =>
  useQuery<Project>(
    PROJECT_LIST_QUERY_KEY.detail(data.id),
    () => getProjectById(data),
    {
      enabled: Boolean(data.id),
    }
  )

export default useGetProjectById
