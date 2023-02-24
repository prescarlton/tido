import { Box, Button, Stack } from '@mui/material'
import { ChevronDown } from 'react-feather'
import { useNavigate } from 'react-router-dom'

import UserComponent from '../UserComponent'

const Topbar = () => {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }
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
        <Button
          variant="text"
          size="large"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '2rem',
          }}
          onClick={handleHomeClick}
        >
          tido
        </Button>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            '& .MuiButton-root': {
              textTransform: 'none',
            },
          }}
        >
          <Button endIcon={<ChevronDown />}>Projects</Button>
          <Button endIcon={<ChevronDown />}>Recent</Button>
          <Button endIcon={<ChevronDown />}>Pinned</Button>
        </Stack>
      </Stack>
      <UserComponent />
    </Box>
  )
}
export default Topbar
