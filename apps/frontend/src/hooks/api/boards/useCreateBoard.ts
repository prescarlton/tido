import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import {
  CREATE_BOARD_QUERY_KEY,
  createBoard,
  CreateBoardRequest,
  CreateBoardResponse,
} from '@/api/ProjectService/requests/createBoard'
import { BOARD_LIST_QUERY_KEY } from '@/api/ProjectService/requests/listBoards'
import useSnackbarContext from '@/contexts/SnackbarContext'

const useCreateBoard = () => {
  const { openSnackbar } = useSnackbarContext()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation(
    CREATE_BOARD_QUERY_KEY,
    (data: CreateBoardRequest) => createBoard(data),
    {
      onSuccess: (data: CreateBoardResponse) => {
        openSnackbar({
          message: 'Board created successfully',
          type: 'success',
        })
        queryClient.invalidateQueries(BOARD_LIST_QUERY_KEY.all)
        navigate(`/p/${data.projectId}/b/${data.id}`)
      },
    }
  )
}

export default useCreateBoard
