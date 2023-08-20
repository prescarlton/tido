import { CreateApiService } from "../APIService"
import { CreateProjectRequest } from "./requests/createProject"

const ProjectService = CreateApiService({
  baseURL: "/projects",
})
export default ProjectService

export const createProject = (data: CreateProjectRequest) =>
  ProjectService.post("/", data)

export * from "./constants"
