import { Box, Typography } from '@mui/material'
import ProjectCard from './ProjectCard'

const MyProjects = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
      }}
    >
      <Typography variant="h2">My Projects</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Box>
  )
}

export default MyProjects
