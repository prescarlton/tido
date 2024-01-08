import { Prisma, PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient()

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync("Password123!", salt)
const numUsers = 5
const fakeUsers: Prisma.UserCreateInput[] = Array.from(Array(numUsers)).map(
  (_) => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    password: hash,
  }),
)
const meData: Prisma.UserCreateInput = {
  firstName: "Preston",
  lastName: "Carlton",
  username: "preston",
  password: hash,
}
const users = [meData, ...fakeUsers]

async function UserSeed() {
  console.info("User seed started")
  for (const u of users) {
    const user = await prisma.user.create({
      data: u,
    })
    console.info(`Created user with id: ${user.id}`)
  }
  console.info("User seed finished")
}
export default UserSeed
