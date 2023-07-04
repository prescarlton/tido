import { Avatar } from "@mantine/core"

const ProjectMembers = () => {
  const members = [
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/64?img=13",
    },
    {
      name: "Jane Doe",
      avatar: "https://i.pravatar.cc/64?img=2",
    },
    {
      name: "John Smith",
      avatar: "https://i.pravatar.cc/64?img=65",
    },
  ]
  return (
    <Avatar.Group spacing="sm">
      {members.map((member) => (
        <Avatar key={member.name} src={member.avatar} radius="xl" />
      ))}
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  )
}
export default ProjectMembers
