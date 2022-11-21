import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const projectData = [
  {
    name: 'Sample Project',
  },
]

const projectSeed = async () => {
  console.log('Project seed started')
  const user = await prisma.user.findUnique({
    where: {
      username: 'preston',
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
        ownerId: user.id,
      },
    })
    console.log(`Created project with id: ${project.id}`)
  }
  console.log('Project seed finished')
}

export default projectSeed
