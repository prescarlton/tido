import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { Box } from "@mantine/core"
import { useEffect, useState } from "react"
import { Task } from "shared/types/tasks"

import BoardViewLayout, {
  IBoardView,
} from "@/components/boards/BoardViewLayout"
import useAppContext from "@/contexts/AppContext"
import useListTaskStatuses from "@/hooks/api/boards/useListTaskStatuses"
import useUpdateTaskStatus from "@/hooks/api/tasks/useUpdateTaskStatus"

import BoardColumn from "./BoardColumn"
import TaskCard from "./TaskCard"
import { findColumnByItemId } from "./utils"

const BoardKanbanView = ({ tasks }: IBoardView) => {
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [columns, setColumns] = useState<Record<string, Task[]> | undefined>()
  const { boardId, projectId } = useAppContext()
  const { data: statuses } = useListTaskStatuses({
    projectId: projectId as string,
  })
  const updateTask = useUpdateTaskStatus()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active } = event
    await updateTask.mutateAsync({
      status: active.data.current?.sortable.containerId,
      projectId: projectId as string,
      boardId: boardId as string,
      taskId: active.id as string,
    })
    setDraggedId(null)
  }
  const handleDragStart = (event: DragStartEvent) => {
    setDraggedId(event.active.id as string)
  }
  const handleDragOver = (event: DragOverEvent) => {
    if (!columns || !statuses) return
    const { active, over } = event
    const { id: activeId } = active as { id: string }
    const overId = over?.id
    if (overId === null || overId === undefined) return
    const activeColumn = findColumnByItemId(columns, activeId)
    const overColumn = findColumnByItemId(columns, overId as string)
    // if the user bein goofy af, cancel the whole thing
    if (!activeColumn || !overColumn || overColumn === activeColumn) return
    // if the user valid, update the item list (locally)
    // get list of all items in active column and over column
    const activeItems = columns[activeColumn]
    const activeIndex = activeItems.findIndex((t) => t.id === activeId)
    const overItems = columns[overColumn]
    const overIndex = overItems.findIndex((t) => t.id === overId)

    setColumns((prev) => {
      if (!prev) return
      const isBelowOverItem =
        over &&
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height

      const modifier = isBelowOverItem ? 1 : 0

      let newIndex: number
      // if this is the case, it means we're hovering over an empty column
      if (columnNames.includes(overId as string)) {
        newIndex = overItems.length + 1
      } else {
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1
      }

      return {
        ...prev,
        [activeColumn]: prev[activeColumn].filter(
          (item) => item.id !== activeId
        ),
        [overColumn]: [
          ...prev[overColumn].slice(0, newIndex),
          prev[activeColumn][activeIndex],
          ...prev[overColumn].slice(newIndex, prev[overColumn].length),
        ],
      }
    })
  }

  const draggedTask = draggedId ? tasks.find((t) => t.id === draggedId) : null
  const columnNames = statuses ? statuses.map((stat) => stat.name) : []
  useEffect(() => {
    if (tasks && statuses) {
      const columnMap: Record<string, Task[]> = {}
      statuses.forEach(
        (stat) =>
          (columnMap[stat.name] = tasks.filter((t) => t.status.id === stat.id))
      )
      setColumns(columnMap)
    }
  }, [tasks, statuses])
  return (
    <BoardViewLayout tasks={tasks}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
      >
        <Box
          style={(theme) => ({
            display: "flex",
            overflowX: "auto",
            alignItems: "start",
            gap: theme.spacing.md,
            padding: theme.spacing.sm,
            flex: 1,
          })}
        >
          {statuses?.map((status) => (
            <BoardColumn
              key={status.id}
              status={status}
              tasks={columns?.[status.name] || []}
            />
          ))}
        </Box>
        <DragOverlay>
          {draggedId && draggedTask ? (
            <TaskCard task={draggedTask} isDragOverlay />
          ) : null}
        </DragOverlay>
      </DndContext>
    </BoardViewLayout>
  )
}

export default BoardKanbanView
