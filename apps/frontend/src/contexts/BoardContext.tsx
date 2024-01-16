import { isEmpty } from "lodash"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { useParams } from "react-router-dom"
import { Board, BoardView } from "shared/types/boards"
import { TaskListFilters } from "shared/types/tasks"

import useGetBoard from "@/hooks/api/boards/useGetBoard"

interface IBoardContext {
  board?: Board
  boardId: string
  taskSearchValue: string
  setTaskSearchValue: (newVal: string) => void
  taskFilterValue: TaskListFilters
  setTaskFilterValue: Dispatch<SetStateAction<TaskListFilters>>
  boardView: BoardView
  setBoardView: Dispatch<SetStateAction<BoardView>>
  sortColumn: string
  setSortColumn: Dispatch<SetStateAction<string>>
  sortDir: "asc" | "desc"
  setSortDir: Dispatch<SetStateAction<"asc" | "desc">>
}

const BoardContext = createContext<IBoardContext>({} as IBoardContext)

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [taskSearchValue, setTaskSearchValue] = useState("")
  const [taskFilterValue, setTaskFilterValue] = useState<TaskListFilters>({})
  const [sortColumn, setSortColumn] = useState("status")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")
  const [boardView, setBoardView] = useState<BoardView>(BoardView.List)
  const { boardId, projectId } = useParams() as {
    boardId: string
    projectId: string
  }

  const { data: board } = useGetBoard({ projectId, id: boardId })

  return (
    <BoardContext.Provider
      value={{
        boardId,
        board,
        taskSearchValue,
        setTaskSearchValue,
        taskFilterValue,
        setTaskFilterValue,
        boardView,
        setBoardView,
        sortColumn,
        sortDir,
        setSortColumn,
        setSortDir,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

const useBoardContext = () => {
  const ctx = useContext(BoardContext)
  if (isEmpty(ctx)) {
    throw new Error("useBoardContext must be used within a Board Provider")
  }
  return ctx
}

export default useBoardContext
