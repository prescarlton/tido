import { Prisma } from "@prisma/client"

export const userSelect = {
  id: true,
  clerkId: true,
} satisfies Prisma.UserSelect
