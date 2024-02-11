import { useQuery } from "@tanstack/react-query"
import { GetInviteDetailsByCodeParams } from "shared/types/workspaces"

import { authQueryKeys } from "@/api/AuthService"

const useGetInviteDetails = (data: GetInviteDetailsByCodeParams) =>
  useQuery({
    ...authQueryKeys.inviteDetails(data),
    select: (res) => res.data.data,
  })

export default useGetInviteDetails
