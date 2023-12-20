import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const projectData = [
  {
    name: "Tido",
    description: "A task management app",
  },
]

const defaultTaskStatuses = [
  {
    name: "Not started",
    color: "gray",
    order: 1,
  },
  {
    name: "On Deck",
    color: "orange",
    order: 2,
  },
  {
    name: "In Progress",
    color: "blue",
    order: 3,
  },
  {
    name: "Done",
    color: "green",
    order: 4,
  },
  {
    name: "Blocked",
    color: "red",
    order: 5,
  },
]

const projectSeed = async () => {
  console.info("Project seed started")
  const user = await prisma.user.findUnique({
    where: {
      username: "preston",
    },
  })
  if (!user) {
    console.error("Could not find preston's account")
    return
  }

  for (const p of projectData) {
    const project = await prisma.project.create({
      data: {
        ...p,
        members: {
          create: {
            userId: user.id,
            role: "ADMIN",
          },
        },
        activity: {
          create: {
            message: "Project created",
          },
        },
      },
    })
    console.info(`Created project with id: ${project.id}`)
    // once the project exists, give 'er some statuses
    await prisma.taskStatus.createMany({
      data: defaultTaskStatuses.map((stat) => ({
        name: stat.name,
        color: stat.color,
        order: stat.order,
        projectId: project.id,
      })),
    })
  }
  console.info("Project seed finished")
}

export default projectSeed
