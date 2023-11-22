import prisma from "../db"

const createProjectActivity = async (
  projectId: string,
  userClerkId: string,
  message: string
) => {
  // make sure the user exists first
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userClerkId,
    },
  })
  if (!user) throw new Error("User not found")
  // if the user does exist, i reckon we should carry on
  await prisma.projectActivity.create({
    data: {
      userId: user.id,
      projectId,
      message,
    },
  })
}
export default createProjectActivity
