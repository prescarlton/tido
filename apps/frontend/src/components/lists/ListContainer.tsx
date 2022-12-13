import { Add, MoreHoriz, MoreVert } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import BoardTaskCard from './BoardTaskCard'

const ListContainer = () => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        height: '100%',
        mx: 0.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
          width: 275,
          borderRadius: 0.75,
          flex: 'none',
          px: 1,
          py: 0.5,
          backgroundColor: 'background.default',
          maxHeight: '100%',
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
        <Box
          sx={{
            overflowY: 'auto',
            flex: 1,
          }}
        >
          <BoardTaskCard />
          <BoardTaskCard />
          <BoardTaskCard />
        </Box>
        <Button
          variant="text"
          startIcon={<Add />}
          sx={{
            color: 'text.secondary',
            textTransform: 'none',
            justifyContent: 'flex-start',
            mt: -1,
          }}
        >
          Add a task
        </Button>
      </Box>
    </Box>
  )
}

export default ListContainer
