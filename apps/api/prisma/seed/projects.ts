import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: 'Sample Project',
    owner: {
      connect: {
        id: 1,
      },
    },
  },
]

const projectSeed = async () => {
  console.log('Project seed started')
  for (const p of projectData) {
    const project = await prisma.project.create({
      data: p,
    })
    console.log(`Created project with id: ${project.id}`)
  }
  console.log('Project seed finished')
}

export default projectSeed
