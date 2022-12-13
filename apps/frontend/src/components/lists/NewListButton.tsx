import { Box, Card, Typography } from '@mui/material'

const NewListButton = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" sx={{ color: 'grey.500' }}>
        Add a new list
      </Typography>
    </Box>
  )
}

export default NewListButton
