import { useMutation, useQueryClient } from "@tanstack/react-query"
import { RenameBoardBody, RenameBoardParams } from "shared/types/boards"

import ProjectService, { BOARDS_QUERY_KEY } from "@/api/ProjectService"
import useSnackbarContext from "@/contexts/SnackbarContext"

const renameBoard = (data: RenameBoardBody & RenameBoardParams) =>
  ProjectService.put(`/${data.projectId}/boards/${data.boardId}/rename`, data)

const useRenameBoard = () => {
  const { openSnackbar } = useSnackbarContext()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: RenameBoardBody & RenameBoardParams) =>
      renameBoard(data),
    onSuccess: () => {
      openSnackbar({
        message: "Board renamed successfully",
        type: "success",
      })
      queryClient.invalidateQueries(BOARDS_QUERY_KEY.all)
    },
    onError: () => {
      openSnackbar({
        message: "Unable to rename board",
        type: "error",
      })
    },
  })
}

export default useRenameBoard
