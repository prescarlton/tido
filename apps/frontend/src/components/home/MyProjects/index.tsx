import { Box, Stack, Typography } from "@mui/material"

import MyProjectsLoading from "@/components/home/MyProjects/Loading"
import useListProjects from "@/hooks/api/projects/useListProjects"

import ProjectCard from "./ProjectCard"

const MyProjects = () => {
  const { data: myProjects, isLoading } = useListProjects()
  if (isLoading || !myProjects) return <MyProjectsLoading />

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.25,
      }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h2">My Projects</Typography>
        <Typography variant="h4">({myProjects.length}/5)</Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
        }}
      >
        {myProjects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  )
}

export default MyProjects
