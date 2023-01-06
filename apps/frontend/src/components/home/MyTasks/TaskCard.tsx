import { Box, Card, Typography } from '@mui/material'

const TaskCard = () => {
  return (
    <Card
      sx={{
        width: 180,
        height: 110,
        p: 1,
        boxShadow: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            backgroundColor: 'primary.main',
            borderRadius: 1,
          }}
        />
        <Typography variant="h6">Tido</Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
        }}
      >
        {' '}
        Task Name
      </Typography>
      <Typography variant="caption">Task Description</Typography>
    </Card>
  )
}

export default TaskCard
