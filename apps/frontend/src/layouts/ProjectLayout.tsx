import ProjectList from '@/components/common/ProjectList'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const ProjectLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
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
  )
}

export default ProjectLayout
