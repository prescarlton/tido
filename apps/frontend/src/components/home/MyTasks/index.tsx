import { Box, Typography } from '@mui/material'

import TaskCard from './TaskCard'

const MyTasks = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
      }}
    >
      <Typography variant="h2">My Tasks</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
        }}
      >
        <Typography variant="h4">You have no tasks assigned to you.</Typography>
      </Box>
    </Box>
  )
}

export default MyTasks
