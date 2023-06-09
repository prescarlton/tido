import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

import BoardCard from "@/components/boards/BoardCard"
import CreateBoardButton from "@/components/boards/CreateBoardButton"
import NoData from "@/components/common/NoData"
import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import useListBoards from "@/hooks/api/boards/useListBoards"

const BoardsPage = () => {
  const { projectId } = useParams() as { projectId: string }

  const { data: boards } = useListBoards({ projectId })

  return (
    <ProjectTabContent
      title="Boards"
      primaryAction={<CreateBoardButton />}
      showBack
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
          flex: 1,
        }}
      >
        {boards?.map((board) => (
          <BoardCard
            key={board.id}
            id={board.id}
            name={board.name}
            tasks={board.tasks}
          />
        ))}
        {boards?.length == 0 && (
          <NoData dataType="boards">
            <Typography variant="body1">
              Click the button above to create one
            </Typography>
          </NoData>
        )}
      </Box>
    </ProjectTabContent>
  )
}
export default BoardsPage
