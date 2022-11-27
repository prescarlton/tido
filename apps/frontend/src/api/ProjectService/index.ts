import { CreateApiService } from '../APIService'

const ProjectService = CreateApiService({
  baseURL: '/projects',
})

export default ProjectService
