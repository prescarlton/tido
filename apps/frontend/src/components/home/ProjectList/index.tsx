import { Box, Group, Title } from "@mantine/core"

import MyProjectsLoading from "@/components/home/ProjectList/Loading"
import ProjectCard from "@/components/projects/ProjectCard"
import useListProjects from "@/hooks/api/projects/useListProjects"

const ProjectList = () => {
  const { data: projects, isLoading } = useListProjects()
  if (isLoading || !projects) return <MyProjectsLoading />

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
    >
      <Title size="h3">Projects</Title>
      <Group gap="md">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Group>
    </Box>
  )
}

export default ProjectList
