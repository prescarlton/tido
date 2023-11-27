import { Prisma } from "@prisma/client"

export const userSelect = {
  id: true,
  username: true,
  firstName: true,
  lastName: true,
} satisfies Prisma.UserSelect
