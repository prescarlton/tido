import { Avatar, Tooltip } from "@mantine/core"
import { differenceBy, take } from "lodash"
import { Project } from "shared/types/projects"

interface IProjectUsers {
  users: Project["users"]
}

const ProjectUsers = ({ users }: IProjectUsers) => {
  // to avoid the card lookin like poo, lets only show the first 3
  // users, then show a +NUM for the remaning members
  const threshold = 3
  const shortList = take(users, threshold)
  if (!users) return null
  const remainingUsers = differenceBy(users, shortList, (user) => user.id).map(
    (user) => [user.user.firstName, user.user.lastName].join(" "),
  )
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        {shortList?.map((user) => (
          <Tooltip
            key={user.id}
            label={[user.user.firstName, user.user.lastName].join(" ")}
            withArrow
          >
            <Avatar radius="xl">
              {user.user.firstName?.[0]}
              {user.user.lastName?.[0]}
            </Avatar>
          </Tooltip>
        ))}
        {remainingUsers.length > 0 && (
          <Tooltip
            label={
              <>
                {remainingUsers.map((mem) => (
                  <div key={mem}>{mem}</div>
                ))}
              </>
            }
          >
            <Avatar>+{remainingUsers.length}</Avatar>
          </Tooltip>
        )}
      </Avatar.Group>
    </Tooltip.Group>
  )
}
export default ProjectUsers
