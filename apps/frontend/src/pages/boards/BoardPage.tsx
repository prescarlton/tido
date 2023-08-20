import { Box } from "@mantine/core"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BoardView } from "shared/types/boards"

import BoardPageHeader from "@/components/boards/BoardPageHeader"
import { BoardProvider } from "@/contexts/BoardContext"
import BoardPageContent from "@/pages/boards/BoardPageContent"

const BoardPage = () => {
  const [tab, setTab] = useState<BoardView>(BoardView.List)
  const { projectId, boardId } = useParams() as {
    projectId: string
    boardId: string
  }

  return (
    <BoardProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <BoardPageHeader tab={tab} setTab={setTab} />
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: 0,
            overflow: "auto",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          })}
        >
          <BoardPageContent projectId={projectId} boardId={boardId} tab={tab} />
        </Box>
      </Box>
    </BoardProvider>
  )
}

export default BoardPage
