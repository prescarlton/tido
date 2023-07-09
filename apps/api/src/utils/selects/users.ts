import { Prisma } from "@prisma/client"

export const userSelect = {
  id: true,
  firstName: true,
  lastName: true,
  username: true,
} satisfies Prisma.UserSelect
