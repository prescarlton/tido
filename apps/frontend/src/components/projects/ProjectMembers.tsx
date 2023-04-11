import { Avatar, Box, Stack } from "@mui/material"

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
      name: "John Doe",
      avatar: "https://i.pravatar.cc/64?img=65",
    },
  ]
  return (
    <Stack
      direction={"row"}
      spacing={-2}
      sx={{
        justifyContent: "flex-end",
      }}
    >
      {members.map((member) => (
        <Avatar
          key={member.name}
          alt={member.name}
          src={member.avatar}
          sx={{
            height: 32,
            width: 32,
            border: "2px solid #fff",
          }}
        />
      ))}
    </Stack>
  )
}
export default ProjectMembers
