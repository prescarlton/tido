import { Box } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BoardView } from "shared/types/boards"

import BoardPageHeader from "@/components/boards/BoardPageHeader"
import useGetBoard from "@/hooks/api/boards/useGetBoard"
import BoardPageContent from "@/pages/boards/BoardPageContent"

const BoardPage = () => {
  const [tab, setTab] = useState<BoardView>(BoardView.List)
  const { projectId, boardId } = useParams() as {
    projectId: string
    boardId: string
  }

  const { data } = useGetBoard({
    id: boardId as string,
    projectId: projectId as string,
  })

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
      }}
    >
      {data && <BoardPageHeader board={data} tab={tab} setTab={setTab} />}
      <BoardPageContent projectId={projectId} boardId={boardId} tab={tab} />
    </Box>
  )
}

export default BoardPage
