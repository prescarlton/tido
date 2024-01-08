import { DefaultListResponse, DefaultResponse } from "../shared"
import {
  GeneralProjectSettings,
  Project,
  ProjectMember,
  ProjectWithActivity,
} from "."

export interface ProjectListResponse extends DefaultListResponse {
  data: ProjectWithActivity[]
}

export interface GetProjectResponse extends DefaultResponse {
  data: Project
}

export interface GetGenProjSettingsResponse extends DefaultResponse {
  data?: GeneralProjectSettings
}

export interface ListProjectMembersResponse extends DefaultResponse {
  data: ProjectMember[]
}
