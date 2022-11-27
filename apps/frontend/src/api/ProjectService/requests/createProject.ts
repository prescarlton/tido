export interface CreateProjectResponse {
  id: string
  name: string
}

export interface CreateProjectRequest {
  name: string
}

export const CREATE_PROJECT_QUERY_KEY = ['createProject']
