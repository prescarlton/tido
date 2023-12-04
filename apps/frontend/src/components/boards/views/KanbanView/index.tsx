import { Box } from "@mantine/core"
import { groupBy } from "lodash"

import BoardViewLayout, {
  IBoardView,
} from "@/components/boards/BoardViewLayout"
import useProjectContext from "@/contexts/ProjectContext"
import useListTaskStatuses from "@/hooks/api/boards/useListTaskStatuses"

import BoardColumn from "./BoardColumn"

const BoardKanbanView = ({ tasks }: IBoardView) => {
  const { boardId, projectId } = useProjectContext()
  const { data: statuses } = useListTaskStatuses({
    id: boardId as string,
    projectId,
  })

  const lanes = groupBy(tasks, (task) => task.status.name)
  return (
    <BoardViewLayout tasks={tasks}>
      <Box
        sx={(theme) => ({
          display: "flex",
          overflowX: "auto",
          alignItems: "start",
          gap: theme.spacing.md,
          padding: theme.spacing.sm,
        })}
      >
        {statuses?.map((status) => (
          <BoardColumn
            key={status.id}
            title={status.name}
            tasks={lanes[status.name] || []}
          />
        ))}
      </Box>
    </BoardViewLayout>
  )
}

export default BoardKanbanView
