import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync('Password123!', salt)

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: 'Preston',
    lastName: 'Carlton',
    username: 'preston',
    password: hash,
  },
]

async function UserSeed() {
  console.info('User seed started')
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.info(`Created user with id: ${user.id}`)
  }
  console.info('User seed finished')
}
export default UserSeed
