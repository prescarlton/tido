import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const projectData = [
  {
    name: "Tido",
    description: "A task management app",
  },
]

const projectSeed = async () => {
  console.info("Project seed started")
  const user = await prisma.user.findUnique({
    where: {
      clerkId: "user_2XxzWEEZr5wbTTOysNMG86gHICf",
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
  }
  console.info("Project seed finished")
}

export default projectSeed
