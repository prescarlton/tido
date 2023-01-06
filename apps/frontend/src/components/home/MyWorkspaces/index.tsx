import { Box, Typography } from '@mui/material'
import WorkspaceCard from './WorkspaceCard'

const MyWorkspaces = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
      }}
    >
      <Typography variant="h2">My Workspaces</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
        }}
      >
        <WorkspaceCard />
        <WorkspaceCard />
        <WorkspaceCard />
      </Box>
    </Box>
  )
}

export default MyWorkspaces
