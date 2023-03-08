import { createQueryKey } from '@/util/createQueryKey'

export const PROJECT_LIST_QUERY_KEY = createQueryKey('projectList')
export const PROJECT_GEN_SETTINGS_QUERY_KEY = createQueryKey(
  'projectGeneralSettings'
)

export const BOARD_LIST_QUERY_KEY = createQueryKey('boardList')

export const CREATE_BOARD_QUERY_KEY = ['createBoard']
export const DELETE_PROJECT_QUERY_KEY = ['deleteProject']
