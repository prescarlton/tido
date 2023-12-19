import { Box, Title } from "@mantine/core"

import ProjectCard from "@/components/projects/ProjectCard"
import useListProjects from "@/hooks/api/projects/useListProjects"

const ProjectListPage = () => {
  const { data: projects } = useListProjects()

  return (
    <Box
      style={(theme) => ({
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing.sm,
        gap: theme.spacing.md,
        flex: 1,
        position: "relative",
      })}
    >
      <Title size="h1">Projects</Title>
      <Box
        style={(theme) => ({
          display: "flex",
          flexWrap: "wrap",
          gap: theme.spacing.sm,
        })}
      >
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  )
}
export default ProjectListPage
