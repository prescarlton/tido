import { Add, MoreVert } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import BoardTaskCard2 from './BoardTaskCard2'

const ListContainer2 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: 275,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            To Do
          </Typography>
          <Typography variant="caption">5</Typography>
        </Box>
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
        <BoardTaskCard2 />
        <BoardTaskCard2 />
        <BoardTaskCard2 />
        <BoardTaskCard2 />
        <BoardTaskCard2 />
      </Stack>
    </Box>
  )
}

export default ListContainer2
