import { ArrowBackIos } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

const BoardPageHeader = ({ boardName }: { boardName: string }) => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(`/p/${projectId}/b`)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        mx: 4,
        my: 2,
        width: '85%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <IconButton onClick={handleBackClick}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {boardName}
        </Typography>
      </Box>
    </Box>
  )
}

export default BoardPageHeader
