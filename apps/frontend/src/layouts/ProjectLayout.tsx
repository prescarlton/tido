import ProjectList from '@/components/common/ProjectList'
import { ProjectProvider } from '@/contexts/ProjectContext'
import { Box } from '@mui/material'
import { Outlet, useParams } from 'react-router-dom'

const ProjectsLayout = () => {
  return (
    <ProjectProvider>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          flex: 1,
          height: '100%',
        }}
      >
        <ProjectList />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ProjectProvider>
  )
}

export default ProjectsLayout
