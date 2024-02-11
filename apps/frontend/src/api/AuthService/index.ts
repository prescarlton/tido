import { createQueryKeys } from "@lukemorales/query-key-factory"
import { GetInviteDetailsByCodeParams } from "shared/types/workspaces"

import { CreateApiService } from "../APIService"

const AuthService = CreateApiService({
  baseURL: "/auth",
})

export const getInviteDetails = (data: GetInviteDetailsByCodeParams) =>
  AuthService.get(`/invite/${data.code}`)

export const logout = () => AuthService.post("/logout")

export const authQueryKeys = createQueryKeys("auth", {
  inviteDetails: (data: GetInviteDetailsByCodeParams) => ({
    queryKey: ["inviteDetails", data.code],
    queryFn: () => getInviteDetails(data),
  }),
})

export default AuthService
