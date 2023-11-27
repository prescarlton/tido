import { Prisma, Task } from "@prisma/client"

import prisma from "@/utils/db"

// should check which fields were edited and create an entry with the user that made the request
const createTaskActivity = async (
  task: Task,
  body: Partial<Task>,
  userId: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  if (!user) throw new Error("User not found")
  const fields = Object.keys(body)

  const updates: Prisma.TaskActivityCreateManyInput[] = []

  for (const field of fields) {
    // before adding activity log, we need to make sure the
    // field actually changed
    if (task[field as keyof Task] === body[field as keyof Task]) continue

    let message = ""
    let oldVal: string | null = ""
    let newVal: string | null = ""
    switch (field as keyof Task) {
      case "name":
        message = `Updated this task's name`
        oldVal = task.name
        newVal = body["name"] || ""
        break
      case "textDescription":
        if (!task.textDescription) message = "Added a description"
        else message = "Updated this task's description"
        oldVal = task.textDescription
        newVal = body["textDescription"] || ""
        break
      case "taskStatusId":
        // TODO: update this with the actual task status words
        message = "Updated this task's status"
        oldVal = task.taskStatusId?.toString() || null
        newVal = task.taskStatusId?.toString() || null
        break
      default:
        continue
    }
    updates.push({
      message,
      userId: user.id,
      taskId: task.id,
      oldVal,
      newVal,
    })
  }

  await prisma.taskActivity.createMany({
    data: updates,
  })
}

export default createTaskActivity
