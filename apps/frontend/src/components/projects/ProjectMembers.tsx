import { Avatar } from "@mantine/core"
import { Project } from "shared/types/projects"

interface IProjectMembers {
  members: Project["members"]
}

const ProjectMembers = ({ members }: IProjectMembers) => {
  return (
    <Avatar.Group spacing="sm">
      {members?.map((member) => (
        <Avatar key={member.id} radius="xl">
          {member.user.firstName?.[0]}
          {member.user.lastName?.[0]}
        </Avatar>
      ))}
    </Avatar.Group>
  )
}
export default ProjectMembers
