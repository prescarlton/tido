import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { GetBoardByIdParams } from "shared/types/boards"

import ProjectService, { BOARDS_QUERY_KEY } from "@/api/ProjectService"

const deleteBoard = (params: GetBoardByIdParams) =>
  ProjectService.delete(`/${params.projectId}/boards/${params.id}`).then(
    (res) => res.data.data
  )

const useDeleteBoard = (params: GetBoardByIdParams) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: () => deleteBoard(params),
    onSuccess: () => {
      notifications.show({
        message: "Successfully deleted board",
        color: "green",
      })
      queryClient.invalidateQueries(BOARDS_QUERY_KEY.all)
      navigate(`/p/${params.projectId}/b`)
    },
    onError: () => {
      notifications.show({
        message: "Unable to delete board",
        color: "red",
      })
    },
  })
}

export default useDeleteBoard
