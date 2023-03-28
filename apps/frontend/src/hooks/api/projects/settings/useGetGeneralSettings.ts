import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { GetGenProjSettingsResponse } from 'shared/types/projects'

import ProjectService, {
  PROJECT_GEN_SETTINGS_QUERY_KEY,
} from '@/api/ProjectService'

const getGenProjSettings = (id: string) =>
  ProjectService.get<GetGenProjSettingsResponse>(
    `/${id}/settings/general`
  ).then((res) => res.data.data)

const useGetGenProjSettings = () => {
  const { projectId } = useParams()
  if (!projectId) throw new Error('Project ID not found')
  return useQuery(PROJECT_GEN_SETTINGS_QUERY_KEY.detail(projectId), () =>
    getGenProjSettings(projectId)
  )
}

export default useGetGenProjSettings
