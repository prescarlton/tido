import { Card, Grow, Typography } from '@mui/material'
import { Project } from 'shared/types/projects'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Grow in>
      <Card
        sx={{
          width: 350,
          height: 125,
          py: 1.25,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          boxShadow: 1,
          '&:hover': {
            boxShadow: 3,
            cursor: 'pointer',
          },
          transition: '3s all',
        }}
      >
        <Typography variant="h3">{project.name}</Typography>
        <Typography variant="subtitle2">{project.description}</Typography>
      </Card>
    </Grow>
  )
}

export default ProjectCard
