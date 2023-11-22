import { Prisma } from "@prisma/client"

export const userSelect = {
  id: true,
  clerkId: true,
  firstName: true,
  lastName: true,
} satisfies Prisma.UserSelect
