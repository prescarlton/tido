import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync('Password123!', salt)

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Preston Carlton',
    email: 'prescarlton@gmail.com',
    password: hash,
  },
]

async function UserSeed() {
  console.log('User seed started')
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log('User seed finished')
}
export default UserSeed
