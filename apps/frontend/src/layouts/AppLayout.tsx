import Navbar from '@/components/common/Navbar'
import Page from '@/components/common/Page'
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
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden',
          gap: 10,
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
