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
const workspaceNames = ["Tido Workspace", "Code/+/Trust", "Other Workspace"]

const projectSeed = async () => {
  console.info("Project seed started")
  const users = await prisma.user.findMany({})
  // gotta make a workspace first
  await prisma.workspace.createMany({
    data: workspaceNames.map((name) => ({
      name,
    })),
  })
  const workspaces = await prisma.workspace.findMany()
  const tidoWorkspace = workspaces.find((w) => w.name === "Tido Workspace")
  if (!tidoWorkspace) {
    throw new Error("u messed up somehow idk bro")
  }

  for (const w of workspaces) {
    await prisma.workspaceUser.createMany({
      data: users.map((user) => ({
        userId: user.id,
        workspaceId: w.id,
      })),
    })
  }

  for (const p of projectData) {
    const project = await prisma.project.create({
      data: {
        ...p,
        users: {
          create: users.map((user) => ({
            userId: user.id,
            role: user.username === "preston" ? "ADMIN" : "MEMBER",
          })),
        },
        workspace: {
          connect: {
            id: tidoWorkspace.id,
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
