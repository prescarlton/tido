import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'

import BoardCard from '@/components/boards/BoardCard'
import CreateBoardButton from '@/components/boards/CreateBoardButton'
import ProjectTabContent from '@/components/projects/overview/ProjectTabs/TabContent'
import useListBoards from '@/hooks/api/boards/useListBoards'

const BoardsPage = () => {
  const { projectId } = useParams() as { projectId: string }

  const { data: boards } = useListBoards({ projectId })

  return (
    <ProjectTabContent title="Boards" primaryAction={<CreateBoardButton />}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
        {boards?.map((board) => (
          <BoardCard key={board.id} id={board.id} name={board.name} />
        ))}
      </Box>
    </ProjectTabContent>
  )
}
export default BoardsPage
