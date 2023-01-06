import { Box, Card, Typography } from '@mui/material'

const ProjectCard = () => {
  return (
    <Card
      sx={{
        width: 350,
        height: 125,
        py: 1.25,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        boxShadow: 0,
      }}
    >
      <Typography variant="h3">Project Name</Typography>
      <Typography variant="subtitle2">
        This is a brief description of the project.
      </Typography>
    </Card>
  )
}

export default ProjectCard
