import { Box, Card, Group, Text, Title, UnstyledButton } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { Project } from "shared/types/projects"
import { Article, Dashboard, Message } from "tabler-icons-react"

import ProjectMembers from "./ProjectMembers"

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }

  return (
    <Card
      sx={(theme) => ({
        width: 240,
        height: 180,
        display: "flex",
        borderRadius: theme.radius.md,
        position: "relative",
        overflow: "visible",
        boxShadow: theme.shadows.sm,
        "&:hover": {
          boxShadow: theme.shadows.md,
        },
        transition: ".2s all ease-in-out",
      })}
    >
      <UnstyledButton
        onClick={handleClick}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          p: 2,
        }}
      >
        <Box>
          <Title size="h3">{project.name}</Title>
          <Text color="dimmed">Last updated 2 days ago</Text>
        </Box>

        <ProjectMembers />
      </UnstyledButton>
    </Card>
  )
}
export default ProjectCard
