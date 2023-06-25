import { Box, Stack, Typography } from "@mui/material"

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
        gap: 1.25,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
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
