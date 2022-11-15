import { Apps } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import UserComponent from '../UserComponent'

const Topbar = () => {
  return (
    <Box
      sx={{
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        backgroundColor: 'background.paper',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton color="primary">
          <Apps />
        </IconButton>
      </Stack>

      <UserComponent />
    </Box>
  )
}
export default Topbar
