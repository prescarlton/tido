import { Box, Card, Typography } from '@mui/material'

const NewListButton = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 1,
        width: 275,
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        height: 'auto',
      }}
    >
      <Typography variant="h5" sx={{ color: 'grey.500' }}>
        Add a new list
      </Typography>
    </Box>
  )
}

export default NewListButton
