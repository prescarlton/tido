import { Avatar, Tooltip } from "@mantine/core"
import { differenceBy, take } from "lodash"
import { Project } from "shared/types/projects"

interface IProjectMembers {
  members: Project["members"]
}

const ProjectMembers = ({ members }: IProjectMembers) => {
  // to avoid the card lookin like poo, lets only show the first 3
  // users, then show a +NUM for the remaning members
  const threshold = 3
  const shortList = take(members, threshold)
  if (!members) return null
  const remainingMembers = differenceBy(
    members,
    shortList,
    (member) => member.id
  ).map((member) => [member.user.firstName, member.user.lastName].join(" "))

  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        {shortList?.map((member) => (
          <Tooltip
            key={member.id}
            label={[member.user.firstName, member.user.lastName].join(" ")}
            withArrow
          >
            <Avatar radius="xl">
              {member.user.firstName?.[0]}
              {member.user.lastName?.[0]}
            </Avatar>
          </Tooltip>
        ))}
        {remainingMembers.length > 0 && (
          <Tooltip
            label={
              <>
                {remainingMembers.map((mem) => (
                  <div key={mem}>{mem}</div>
                ))}
              </>
            }
          >
            <Avatar>+{remainingMembers.length}</Avatar>
          </Tooltip>
        )}
      </Avatar.Group>
    </Tooltip.Group>
  )
}
export default ProjectMembers
