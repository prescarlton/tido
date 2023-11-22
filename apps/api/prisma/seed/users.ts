import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: "Preston",
    lastName: "Carlton",
    clerkId: "user_2XxzWEEZr5wbTTOysNMG86gHICf",
  },
]

async function UserSeed() {
  console.info("User seed started")
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.info(`Created user with id: ${user.id}`)
  }
  console.info("User seed finished")
}
export default UserSeed
