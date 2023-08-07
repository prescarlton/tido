import { isEmpty } from "lodash"
import { createContext, ReactNode, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { Board } from "shared/types/boards"

import useGetBoard from "@/hooks/api/boards/useGetBoard"

interface IBoardContext {
  board?: Board
  boardId: string
  taskSearchValue: string
  setTaskSearchValue: (newVal: string) => void
}

const BoardContext = createContext<IBoardContext>({} as IBoardContext)

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [taskSearchValue, setTaskSearchValue] = useState("")
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
