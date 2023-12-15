import { ListTaskStatusesResponse } from "shared/types/boards"
import {
  FavoriteProjectRequestBody,
  FavoriteProjectRequestParms,
} from "shared/types/favorites"
import { GetProjectParams } from "shared/types/projects"

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

export const listTaskStatuses = (data: GetProjectParams) =>
  ProjectService.get<ListTaskStatusesResponse>(`/${data.projectId}/statuses`)

export * from "./constants"
