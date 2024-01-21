import { prisma } from "@/prismaConnection"

const getUserActiveWorkspace = async (userId: string) => {
  let user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      workspaces: true,
      activeWorkspace: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })
  // if the user isn't real, be a drama queen
  if (!user) throw new Error("User not found")
  // if the uer has an active workspace, return it
  if (user.activeWorkspace) return user.activeWorkspace
  // if they don't, set their active workspace to the first one we find
  if (user.workspaces.length === 0)
    throw new Error("User is not apart of any workspaces")
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      activeWorkspaceId: user.workspaces[0].workspaceId,
    },
  })
  user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      workspaces: true,
      activeWorkspace: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })
  // should never happen, but just in case
  if (!user) throw new Error("User not found")
  return user.activeWorkspace
}
export default getUserActiveWorkspace
