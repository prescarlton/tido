import Page from '@/components/common/Page'
import Sidebar from '@/components/common/Sidebar'
import UserComponent from '@/components/common/UserComponent'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
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
        <Page>
          <Outlet />
          <UserComponent />
        </Page>
      </Box>
    </Box>
  )
}
export default AppLayout
