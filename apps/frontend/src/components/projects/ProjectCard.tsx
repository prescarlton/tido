import { ProjectListResponse } from '@/api/ProjectService/requests/listProjects'
import { Article, Dashboard, Message } from '@mui/icons-material'
import { Box, Card, Divider, Stack, Typography } from '@mui/material'
import ProjectMembers from './ProjectMembers'

const ProjectCard = ({ project }: { project: ProjectListResponse }) => {
  return (
    <Card
      sx={{
        width: 240,
        height: 180,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 2,
        p: 2,
        borderRadius: 2,
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Box>
        <Typography variant="h3">{project.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated 2 days ago
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Dashboard sx={{ color: 'text.secondary' }} />
          <Article sx={{ color: 'text.secondary' }} />
          <Message sx={{ color: 'text.secondary' }} />
        </Stack>
        <ProjectMembers />
      </Box>
    </Card>
  )
}
export default ProjectCard
