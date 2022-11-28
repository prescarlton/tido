import ProjectCard from '@/components/projects/ProjectCard'
import useListProjects from '@/hooks/api/projects/useListProjects'
import { Box, Typography } from '@mui/material'

const ProjectListPage = () => {
  const { data: projects } = useListProjects()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: 2,
        flex: 1,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h1">Projects</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  )
}
export default ProjectListPage
