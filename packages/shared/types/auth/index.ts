export interface Me {
  id: string
  firstName: string | null
  lastName: string | null
  email: string | null
  username: string
}

export * from "./requests"
export * from "./responses"
