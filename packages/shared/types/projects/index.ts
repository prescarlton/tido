import { ShortUser } from "../users"
export interface ProjectMember {
  id: number
  role: string
  user: ShortUser
}

export interface Project {
  id: string
  name: string
  description: string
  created: Date
  updated: Date
  favorited: boolean
  members?: ProjectMember[]
}

export interface ProjectWithActivity extends Project {
  activity: {
    id: number
    message: string
    created: Date
  }[]
}

export interface GeneralProjectSettings {
  id: string
  name: string
  description: string
}

export * from "./responses"
export * from "./requests"
