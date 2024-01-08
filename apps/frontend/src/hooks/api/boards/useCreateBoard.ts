import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { CreateBoardBody, CreateBoardResponse } from "shared/types/boards"

import ProjectService, { BOARDS_QUERY_KEY } from "@/api/ProjectService"
import useAppContext from "@/contexts/AppContext"

const createBoard = (data: CreateBoardBody, projectId: string) =>
  ProjectService.post<CreateBoardResponse>(`/${projectId}/boards`, data).then(
    (res) => res.data.data,
  )

const useCreateBoard = () => {
  const { projectId } = useAppContext()

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  if (!projectId)
    throw new Error("useCreateBoard cannot be used in this context.")

  return useMutation({
    mutationFn: (data: CreateBoardBody) => createBoard(data, projectId),
    onSuccess: (data) => {
      notifications.show({
        message: "Board created successfully",
        color: "green",
      })
      queryClient.invalidateQueries({ queryKey: BOARDS_QUERY_KEY.all })
      navigate(`/p/${data.projectId}/b/${data.id}`)
    },
  })
}

export default useCreateBoard
