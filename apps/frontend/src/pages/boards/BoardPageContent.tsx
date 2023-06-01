import { Box, Tab, Tabs } from "@mui/material"
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react"
import { BoardView } from "shared/types/boards"

import BoardKanbanView from "@/components/boards/views/KanbanView"
import BoardListView from "@/components/boards/views/ListView"
import BoardTableView from "@/components/boards/views/TableView"
import useListTasks from "@/hooks/api/tasks/useListTasks"

interface IBoardPageContent {
  boardId: string
  projectId: string
  tab: BoardView
}

const BoardPageContent = ({ boardId, projectId, tab }: IBoardPageContent) => {
  // get all the tasks
  const { data: tasks } = useListTasks({ projectId, boardId })

  return (
    <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {tab === BoardView.List && <BoardListView tasks={tasks || []} />}
        {tab === BoardView.Table && <BoardTableView />}
        {tab === BoardView.Kanban && <BoardKanbanView />}
      </Box>
    </Box>
  )
}

export default BoardPageContent
