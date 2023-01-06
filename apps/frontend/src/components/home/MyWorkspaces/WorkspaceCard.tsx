import { Box, Card, Typography } from '@mui/material'

const WorkspaceCard = () => {
  return (
    <Card
      sx={{
        width: 350,
        height: 75,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        boxShadow: 0,
      }}
    >
      <Box
        sx={{
          height: 48,
          width: 48,
          backgroundColor: 'primary.main',
          borderRadius: 1,
        }}
      />
      <Box>
        <Typography variant="h3">Workspace Name</Typography>
        <Typography variant="subtitle2">12 members</Typography>
      </Box>
    </Card>
  )
}

export default WorkspaceCard
