import Sidebar from '@/components/common/Sidebar'
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
      <Sidebar />
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
