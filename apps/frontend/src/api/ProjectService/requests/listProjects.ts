import { createQueryKey } from '@/util/createQueryKey'

export interface ProjectListResponse {
  id: string
  name: string
  description: string
}

export const PROJECT_LIST_QUERY_KEY = createQueryKey('projectList')
