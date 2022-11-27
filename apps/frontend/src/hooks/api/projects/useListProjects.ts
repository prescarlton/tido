import ProjectService from '@/api/ProjectService'
import {
  ProjectListResponse,
  PROJECT_LIST_QUERY_KEY,
} from '@/api/ProjectService/requests/listProjects'
import { useQuery } from '@tanstack/react-query'

const getProjectList = () =>
  ProjectService.get('/').then((res) => res.data.data)

const useListProjects = () =>
  useQuery<ProjectListResponse[]>(PROJECT_LIST_QUERY_KEY.all, () =>
    getProjectList()
  )

export default useListProjects
