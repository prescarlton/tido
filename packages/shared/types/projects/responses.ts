import { Project } from '.'
import { DefaultListResponse } from '../api'

export interface ProjectListResponse extends DefaultListResponse {
  data: Project[]
}
