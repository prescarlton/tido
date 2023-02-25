import { useQuery } from '@tanstack/react-query'
import { GetProjectParams, GetProjectResponse } from 'shared/types/projects'

import ProjectService from '@/api/ProjectService'
import { PROJECT_LIST_QUERY_KEY } from '@/api/ProjectService'

const getProjectById = async (data: GetProjectParams) =>
  ProjectService.get<GetProjectResponse>(`/${data.id}`).then(
    (res) => res.data.data
  )

const useGetProjectById = (data: GetProjectParams) => {
  return useQuery(
    PROJECT_LIST_QUERY_KEY.detail(data.id),
    () => getProjectById(data),
    {
      enabled: Boolean(data.id),
    }
  )
}

export default useGetProjectById
