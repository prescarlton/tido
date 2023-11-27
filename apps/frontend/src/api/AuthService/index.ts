import { CreateApiService } from "../APIService"

const AuthService = CreateApiService({
  baseURL: "/auth",
})

export const logout = () => AuthService.post("/logout")

export default AuthService
