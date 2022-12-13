import BoardPageHeader from '@/components/boards/BoardPageHeader'
import ListContainer from '@/components/lists/ListContainer'
import ListContainer2 from '@/components/lists/ListContainer2'
import useGetBoard from '@/hooks/api/boards/useGetBoard'
import { Box, Stack } from '@mui/material'
import { useParams, useSearchParams } from 'react-router-dom'

const BoardPage = () => {
  const { boardId, projectId } = useParams()
  const { data } = useGetBoard({
    id: boardId as string,
    projectId: projectId as string,
  })
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <BoardPageHeader boardName={data?.name || 'Loading...'} />
      <Box
        sx={{
          px: 4,
          display: 'flex',
          gap: 1.5,
          overflow: 'auto',
        }}
      >
        <ListContainer />
      </Box>
    </Box>
  )
}

export default BoardPage
