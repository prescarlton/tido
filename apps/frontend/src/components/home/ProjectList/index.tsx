import { Box, Text } from "@mantine/core"

import MyProjectsLoading from "@/components/home/ProjectList/Loading"
import useListProjects from "@/hooks/api/projects/useListProjects"

import ProjectCard from "./ProjectCard"

const ProjectList = () => {
  const { data: projects, isLoading } = useListProjects()
  if (isLoading || !projects) return <MyProjectsLoading />

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
      }}
    >
      <Text variant="h3" sx={{ fontWeight: "bold" }}>
        Projects
      </Text>
      <Box
        sx={{
          display: "flex",
          gap: 16,
        }}
      >
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  )
}

export default ProjectList
