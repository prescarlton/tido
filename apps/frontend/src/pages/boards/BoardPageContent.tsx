import { Box } from "@mantine/core"
import { BoardView } from "shared/types/boards"

import BoardGroupView from "@/components/boards/views/GroupView"
import BoardKanbanView from "@/components/boards/views/KanbanView"
import BoardListView from "@/components/boards/views/ListView"
import useListTasks from "@/hooks/api/tasks/useListTasks"

interface IBoardPageContent {
  boardId: string
  projectId: string
  tab: string | null
}

const BoardPageContent = ({ boardId, projectId, tab }: IBoardPageContent) => {
  // get all the tasks
  const { data: tasks } = useListTasks({ projectId, boardId })
  // TODO: FIX SCROLLING
  return tab === BoardView.List ? (
    <BoardListView tasks={tasks || []} />
  ) : tab === BoardView.Group ? (
    <BoardGroupView />
  ) : (
    <BoardKanbanView />
  )
}

export default BoardPageContent
