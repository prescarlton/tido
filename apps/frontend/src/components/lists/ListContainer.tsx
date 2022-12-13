import { Add, MoreHoriz, MoreVert } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import BoardTaskCard from './BoardTaskCard'

const ListContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: 275,
        borderRadius: 2,
        flex: 'none',
        px: 1,
        py: 0.5,
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 900 }}>
          To Do
        </Typography>
        <Stack direction="row" spacing={0.5}>
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </Stack>
      </Box>
      <Stack spacing={1}>
        <BoardTaskCard />
        <BoardTaskCard />
        <BoardTaskCard />
        <Button
          variant="text"
          startIcon={<Add />}
          sx={{ color: 'text.secondary', textTransform: 'none' }}
        >
          Add a task
        </Button>
      </Stack>
    </Box>
  )
}

export default ListContainer
