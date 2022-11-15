import Page from '@/components/common/Page'
import ProjectList from '@/components/common/ProjectList'
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
        <Page>
          <Outlet />
          <UserComponent />
        </Page>
      </Box>
    </Box>
  )
}
export default AppLayout
