import { PrismaClient } from '@prisma/client'
import projectSeed from './projects'
import UserSeed from './users'

const prisma = new PrismaClient()
const seeds: Promise<void>[] = []

seeds.push(UserSeed().then(() => projectSeed()))

Promise.all(seeds)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
