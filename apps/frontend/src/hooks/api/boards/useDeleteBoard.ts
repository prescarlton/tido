import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { GetBoardByIdParams } from "shared/types/boards"

import ProjectService, { BOARDS_QUERY_KEY } from "@/api/ProjectService"
import useSnackbarContext from "@/contexts/SnackbarContext"

const deleteBoard = (params: GetBoardByIdParams) =>
  ProjectService.delete(`/${params.projectId}/boards/${params.id}`).then(
    (res) => res.data.data
  )

const useDeleteBoard = (params: GetBoardByIdParams) => {
  const { openSnackbar } = useSnackbarContext()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: () => deleteBoard(params),
    onSuccess: () => {
      openSnackbar({
        message: "Successfully deleted board",
        type: "success",
      })
      queryClient.invalidateQueries(BOARDS_QUERY_KEY.all)
      navigate(`/p/${params.projectId}/b`)
    },
    onError: () => {
      openSnackbar({
        message: "Unable to delete board",
        type: "error",
      })
    },
  })
}

export default useDeleteBoard
