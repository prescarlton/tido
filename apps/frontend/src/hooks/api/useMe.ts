import getMe, { ME_QUERY_KEY } from "@/api/AuthService/requests/me"
import { useQuery } from "@tanstack/react-query"

const useGetMe = () => useQuery(ME_QUERY_KEY, () => getMe())

export default useGetMe
