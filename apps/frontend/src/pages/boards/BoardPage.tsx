import { Box } from "@mantine/core"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BoardView } from "shared/types/boards"

import BoardPageHeader from "@/components/boards/BoardPageHeader"
import { BoardProvider } from "@/contexts/BoardContext"
import BoardPageContent from "@/pages/boards/BoardPageContent"

import styles from "./styles.module.scss"

const BoardPage = () => {
  const [tab, setTab] = useState<BoardView>(BoardView.List)
  const { projectId, boardId } = useParams() as {
    projectId: string
    boardId: string
  }

  return (
    <BoardProvider>
      <Box className={styles.container}>
        <BoardPageHeader tab={tab} setTab={setTab} />
        <BoardPageContent projectId={projectId} boardId={boardId} tab={tab} />
      </Box>
    </BoardProvider>
  )
}

export default BoardPage
