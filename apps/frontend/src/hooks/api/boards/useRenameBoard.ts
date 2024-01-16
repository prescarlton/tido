import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { RenameBoardBody, RenameBoardParams } from "shared/types/boards"

import ProjectService, { BOARDS_QUERY_KEY } from "@/api/ProjectService"

const renameBoard = (data: RenameBoardBody & RenameBoardParams) =>
  ProjectService.put(`/${data.projectId}/boards/${data.boardId}/rename`, data)

const useRenameBoard = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: RenameBoardBody & RenameBoardParams) =>
      renameBoard(data),
    onSuccess: () => {
      notifications.show({
        message: "Board renamed successfully",
        color: "green",
      })
      queryClient.invalidateQueries({ queryKey: BOARDS_QUERY_KEY.all })
    },
    onError: () => {
      notifications.show({
        message: "Unable to rename board",
        color: "red",
      })
    },
  })
}

export default useRenameBoard
