import "express"

interface Locals {
  userClerkId?: string
}

declare module "express" {
  export interface Response {
    locals: Locals
  }
}
