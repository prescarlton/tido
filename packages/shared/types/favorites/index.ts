import { Project } from "../projects"

export interface UserFavorites {
  projects: Omit<Project, "favorited">[]
}

export * from "./responses"
export * from "./requests"
