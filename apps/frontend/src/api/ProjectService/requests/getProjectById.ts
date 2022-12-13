import ProjectService from '..'

export interface GetProjectByIdRequest {
  id: string
}

export interface Project {
  id: string
  name: string
  description: string
}

export const getProjectById = async (data: GetProjectByIdRequest) =>
  ProjectService.get(`/${data.id}`).then((res) => res.data.data)
