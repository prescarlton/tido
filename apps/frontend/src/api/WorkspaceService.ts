import { createQueryKeys } from "@lukemorales/query-key-factory"
import {
  GetMyActiveWorkspaceResponse,
  ListMyWorkspacesResponse,
  ListWorkspaceUsersResponse,
  SetMyActiveWorkspaceParams,
} from "shared/types/workspaces"

import { CreateApiService } from "./APIService"

const WorkspaceService = CreateApiService({
  baseURL: "workspaces",
})

export const listMyWorkspaces = () =>
  WorkspaceService.get<ListMyWorkspacesResponse>("/")
export const getMyActiveWorkspace = () =>
  WorkspaceService.get<GetMyActiveWorkspaceResponse>("/active")
export const listWorkspaceUsers = () =>
  WorkspaceService.get<ListWorkspaceUsersResponse>("/users")
export const setMyActiveWorkspace = (data: SetMyActiveWorkspaceParams) =>
  WorkspaceService.put(`/active/${data.workspaceId}`)
export const inviteUserToWorkspace = (data) =>
  WorkspaceService.post("/invite", data)

export const workspaceQueryKeys = createQueryKeys("workspaces", {
  all: null,
  my: {
    queryKey: ["my"],
    queryFn: () => listMyWorkspaces(),
  },
  active: {
    queryKey: ["active"],
    queryFn: getMyActiveWorkspace,
  },
  users: {
    queryKey: ["users"],
    queryFn: listWorkspaceUsers,
  },
})
