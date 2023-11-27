import { useQuery } from "@tanstack/react-query"
import { GetMeResponse } from "shared/types/auth"

import AuthService from "@/api/AuthService"

export const ME_QUERY_KEY = ["getMe"]

const getMe = () =>
  AuthService.get<GetMeResponse>("/me").then((res) => res.data.data)

const useGetMe = () => useQuery(ME_QUERY_KEY, getMe)

export default useGetMe
