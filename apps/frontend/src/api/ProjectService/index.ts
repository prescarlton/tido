import {
  GetBoardByIdParams,
  ListTaskStatusesResponse,
} from "shared/types/boards"
import {
  FavoriteProjectRequestBody,
  FavoriteProjectRequestParms,
} from "shared/types/favorites"

import { CreateApiService } from "../APIService"
import { CreateProjectRequest } from "./requests/createProject"

const ProjectService = CreateApiService({
  baseURL: "/projects",
})
export default ProjectService

export const createProject = (data: CreateProjectRequest) =>
  ProjectService.post("/", data)

export const favoriteProject = (
  data: FavoriteProjectRequestBody & FavoriteProjectRequestParms
) => ProjectService.put(`/${data.projectId}/favorite`, data)

export const listTaskStatuses = (data: GetBoardByIdParams) =>
  ProjectService.get<ListTaskStatusesResponse>(
    `/${data.projectId}/boards/${data.id}/statuses`
  )

export * from "./constants"
