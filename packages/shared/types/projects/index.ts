export interface Project {
  id: string
  name: string
  description: string
  created: Date
  updated: Date
}

export interface GeneralProjectSettings {
  id: string
  name: string
  description: string
}

export * from "./responses"
export * from "./requests"
