import { Box, Card, Text, Title, UnstyledButton } from "@mantine/core"
import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"
import { ProjectWithActivity } from "shared/types/projects"

import ProjectUsers from "./ProjectMembers"

const ProjectCard = ({ project }: { project: ProjectWithActivity }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }

  return (
    <Card
      style={(theme) => ({
        width: 250,
        height: 150,
        display: "flex",
        borderRadius: theme.radius.md,
        position: "relative",
        overflow: "visible",
        "&:hover": {
          boxShadow: theme.shadows.sm,
          cursor: "pointer",
        },
        transition: ".2s all ease-in-out",
      })}
      withBorder
    >
      <UnstyledButton
        onClick={handleClick}
        style={{
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
          <Title size="h3" lineClamp={1}>
            {project.name}
          </Title>
          <Text c="dimmed">
            Last updated {dayjs(project.activity[0].created).fromNow()}
          </Text>
        </Box>

        <ProjectUsers users={project.users} />
      </UnstyledButton>
    </Card>
  )
}
export default ProjectCard
