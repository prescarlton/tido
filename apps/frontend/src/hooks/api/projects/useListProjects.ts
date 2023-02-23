import { useQuery } from '@tanstack/react-query'

import ProjectService from '@/api/ProjectService'
import {
  PROJECT_LIST_QUERY_KEY,
  ProjectListResponse,
} from '@/api/ProjectService/requests/listProjects'

const getProjectList = () =>
  ProjectService.get('/').then((res) => res.data.data)

const useListProjects = () =>
  useQuery<ProjectListResponse[]>(PROJECT_LIST_QUERY_KEY.all, () =>
    getProjectList()
  )

export default useListProjects
