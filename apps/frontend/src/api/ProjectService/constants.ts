import { createQueryKey } from "@/util/createQueryKey"

export const PROJECTS_QUERY_KEY = createQueryKey("projectList")
export const PROJECT_GEN_SETTINGS_QUERY_KEY = createQueryKey(
  "projectGeneralSettings"
)

export const BOARDS_QUERY_KEY = createQueryKey("boardList")
export const TASKS_QUERY_KEY = createQueryKey("taskList")
export const TAGS_QUERY_KEY = createQueryKey("tagList")

export const CREATE_BOARD_QUERY_KEY = ["createBoard"]
export const DELETE_PROJECT_QUERY_KEY = ["deleteProject"]
export const CREATE_TAG_QUERY_KEY = ["createTag"]
export const UPDATE_TAG_QUERY_KEY = ["updateTag"]
