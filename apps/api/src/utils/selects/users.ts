import { Prisma } from "database"

export const userSelect = {
  id: true,
  username: true,
  firstName: true,
  lastName: true,
} satisfies Prisma.UserSelect
