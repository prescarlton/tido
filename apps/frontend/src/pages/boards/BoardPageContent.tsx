import { BoardView } from "shared/types/boards"

import BoardGroupView from "@/components/boards/views/GroupView"
import BoardKanbanView from "@/components/boards/views/KanbanView"
import BoardListView from "@/components/boards/views/ListView"
import useBoardContext from "@/contexts/BoardContext"
import useListTasks from "@/hooks/api/tasks/useListTasks"

interface IBoardPageContent {
  boardId: string
  projectId: string
  tab: string | null
}

const BoardPageContent = ({ boardId, projectId, tab }: IBoardPageContent) => {
  const { taskSearchValue } = useBoardContext()
  // get all the tasks
  const { data: tasks } = useListTasks(
    {
      projectId,
      boardId,
    },
    {
      search: taskSearchValue,
    }
  )
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
