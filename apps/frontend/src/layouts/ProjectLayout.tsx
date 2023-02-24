import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { ProjectProvider } from '@/contexts/ProjectContext'

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
