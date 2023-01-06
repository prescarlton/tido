import MyProjects from '@/components/home/MyProjects'
import MyTasks from '@/components/home/MyTasks'
import MyWorkspaces from '@/components/home/MyWorkspaces'
import PageWrapper from '@/layouts/PageLayout'
import { Box, Typography } from '@mui/material'

const HomePage = () => {
  return (
    <PageWrapper>
      <Box
        sx={{
          py: 2,
          px: 12,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <MyTasks />
        <MyWorkspaces />
        <MyProjects />
      </Box>
    </PageWrapper>
  )
}
export default HomePage
