import { Project } from '.'
import { DefaultListResponse, DefaultResponse } from '../api'

export interface ProjectListResponse extends DefaultListResponse {
  data: Project[]
}

export interface GetProjectResponse extends DefaultResponse {
  data: Project
}
