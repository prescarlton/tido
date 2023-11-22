import { Box, Card, Text, Title, UnstyledButton } from "@mantine/core"
import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"
import { ProjectWithActivity } from "shared/types/projects"

import ProjectMembers from "./ProjectMembers"

const ProjectCard = ({ project }: { project: ProjectWithActivity }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }

  return (
    <Card
      sx={(theme) => ({
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
          <Title size="h3" lineClamp={1}>
            {project.name}
          </Title>
          <Text color="dimmed">
            Last updated {dayjs(project.activity[0].created).fromNow()}
          </Text>
        </Box>

        <ProjectMembers members={project.members} />
      </UnstyledButton>
    </Card>
  )
}
export default ProjectCard
