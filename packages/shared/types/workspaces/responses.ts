import { ShortUser } from "types/users"

import { DefaultResponse } from "../shared"
import { Workspace } from "."

export interface GetMyActiveWorkspaceResponse extends DefaultResponse {
  data: Workspace
}

export interface ListMyWorkspacesResponse extends DefaultResponse {
  data: Workspace[]
}

export interface ListWorkspaceUsersResponse extends DefaultResponse {
  data: {
    user: ShortUser
  }[]
}
