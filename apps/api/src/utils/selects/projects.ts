import { Prisma } from "database"

export const projectSelect = {
  id: true,
  name: true,
  description: true,
  created: true,
  updated: true,
} satisfies Prisma.ProjectSelect
