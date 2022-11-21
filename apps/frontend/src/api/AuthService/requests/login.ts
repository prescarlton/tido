import AuthService from '..'

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  refreshToken: string
  user: any
}

export const LOGIN_QUERY_KEY = ['login']

export const login = (data: LoginRequest) =>
  AuthService.post('/login', data).then((res) => res.data)
