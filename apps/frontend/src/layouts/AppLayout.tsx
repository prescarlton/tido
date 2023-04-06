import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Page from '@/components/common/Page'
import Topbar from '@/components/common/Topbar'

const AppLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Topbar />
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
        </Page>
      </Box>
    </Box>
  )
}
export default AppLayout
