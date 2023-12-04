import { Prisma } from "@prisma/client"

import { userSelect } from "./users"

export const taskTagSelect = {
  id: true,
  color: true,
  name: true,
} satisfies Prisma.TaskTagSelect

export const taskInclude = {
  createdBy: {
    select: userSelect,
  },
  tags: {
    select: taskTagSelect,
  },
  status: true,
} satisfies Prisma.TaskInclude

export const taskDetailsInclude = {
  ...taskInclude,
  activity: true,
} satisfies Prisma.TaskInclude
