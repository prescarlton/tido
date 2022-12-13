import ProjectCard from '@/components/projects/ProjectCard'
import useProjectContext from '@/contexts/ProjectContext'
import useListProjects from '@/hooks/api/projects/useListProjects'
import { ArrowForwardIos } from '@mui/icons-material'
import { Box, Collapse, IconButton, Slide, Typography } from '@mui/material'

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
        backgroundColor: '#FAFBFC',
        position: 'relative',
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
