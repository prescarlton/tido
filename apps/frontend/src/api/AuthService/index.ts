import { CreateApiService } from '../APIService'

const AuthService = CreateApiService({
  baseURL: '/auth',
})

export default AuthService
