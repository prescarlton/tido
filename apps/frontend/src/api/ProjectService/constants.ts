import { createQueryKey } from "@/util/createQueryKey"

export const PROJECTS_QUERY_KEY = createQueryKey("projectList")
export const PROJECT_GEN_SETTINGS_QUERY_KEY = createQueryKey(
  "projectGeneralSettings"
)

export const BOARDS_QUERY_KEY = createQueryKey("boardList")
export const TASKS_QUERY_KEY = createQueryKey("taskList")
export const TAGS_QUERY_KEY = createQueryKey("tagList")
export const TASK_ACTIVITY_QUERY_KEY = createQueryKey("taskActivity")
export const TASK_STATUSES_QUERY_KEY = createQueryKey("taskStatuses")

export const CREATE_BOARD_QUERY_KEY = ["createBoard"]
export const DELETE_PROJECT_QUERY_KEY = ["deleteProject"]
export const CREATE_TAG_QUERY_KEY = ["createTag"]
export const UPDATE_TAG_QUERY_KEY = ["updateTag"]
