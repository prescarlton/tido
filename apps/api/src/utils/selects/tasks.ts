import { Prisma } from "@prisma/client"

export const taskTagSelect = {
  id: true,
  color: true,
  name: true,
} satisfies Prisma.TaskTagSelect
