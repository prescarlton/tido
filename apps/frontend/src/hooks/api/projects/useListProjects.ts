import { useQuery } from '@tanstack/react-query'
import { ProjectListResponse } from 'shared/types/projects/responses'

import ProjectService from '@/api/ProjectService'
import { PROJECT_LIST_QUERY_KEY } from '@/api/ProjectService/constants'

const getProjectList = () =>
  ProjectService.get<ProjectListResponse>('/').then((res) => res.data.data)

const useListProjects = () =>
  useQuery(PROJECT_LIST_QUERY_KEY.all, () => getProjectList())

export default useListProjects
