import { createQueryKeys } from "@lukemorales/query-key-factory"

import { CreateApiService } from "./APIService"

const WorkspaceService = CreateApiService({
  baseURL: "workspaces",
})

export const listMyWorkspaces = () => WorkspaceService.get("/")

export const workspaceQueryKeys = createQueryKeys("workspaces", {
  all: null,
  my: {
    queryKey: ["my"],
    queryFn: () => listMyWorkspaces(),
  },
})
