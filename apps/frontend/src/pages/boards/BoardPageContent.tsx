import { Box, Tab, Tabs } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { BoardView } from "shared/types/boards"

import BoardKanbanView from "@/components/boards/views/KanbanView"
import BoardListView from "@/components/boards/views/ListView"
import BoardTableView from "@/components/boards/views/TableView"
import useListTasks from "@/hooks/api/boards/tasks/useListTasks"

interface IBoardPageContent {
  boardId: string
  projectId: string
}

const BoardPageContent = ({ boardId, projectId }: IBoardPageContent) => {
  const [tab, setTab] = useState<BoardView>(BoardView.List)

  const handleChangeTab = (_e: SyntheticEvent, newVal: BoardView) => {
    setTab(newVal)
  }

  // get all the tasks
  const { data: tasks } = useListTasks({ projectId, boardId })

  return (
    <Box sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Tabs
        value={tab}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          px: 6,
        }}
        onChange={handleChangeTab}
      >
        <Tab label="List View" value={BoardView.List} />
        <Tab label="Table View" value={BoardView.Table} />
        <Tab label="Board View" value={BoardView.Kanban} />
      </Tabs>
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {tab === BoardView.List && <BoardListView tasks={tasks || []} />}
        {tab === BoardView.Table && <BoardTableView />}
        {tab === BoardView.Kanban && <BoardKanbanView />}
      </Box>
    </Box>
  )
}

export default BoardPageContent
