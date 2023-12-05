import { Task } from "shared/types/tasks"

export const findColumnByItemId = (
  columns: Record<string, Task[]>,
  itemId: string
) => {
  // check to see if user is dragging over an empty column
  if (Object.keys(columns).includes(itemId)) return itemId
  return Object.keys(columns).find((key) =>
    columns[key].map((item) => item.id).includes(itemId)
  )
}
