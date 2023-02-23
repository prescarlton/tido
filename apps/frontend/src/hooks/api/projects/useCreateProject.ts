import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import ProjectService from '@/api/ProjectService'
import {
  CREATE_PROJECT_QUERY_KEY,
  CreateProjectRequest,
} from '@/api/ProjectService/requests/createProject'
import { PROJECT_LIST_QUERY_KEY } from '@/api/ProjectService/requests/listProjects'
import useSnackbarContext from '@/contexts/SnackbarContext'

const createProject = (data: CreateProjectRequest) =>
  ProjectService.post('/', data).then((res) => res.data.data)

const useCreateProject = () => {
  const { openSnackbar } = useSnackbarContext()
  const queryClient = useQueryClient()

  return useMutation(
    CREATE_PROJECT_QUERY_KEY,
    (data: CreateProjectRequest) => createProject(data),
    {
      onError: (error: AxiosError) => {
        console.log(error)
        openSnackbar({
          message: error?.message,
          type: 'error',
        })
      },
      onSuccess: () => {
        queryClient.invalidateQueries(PROJECT_LIST_QUERY_KEY.all)
        openSnackbar({
          message: 'Project created successfully',
          type: 'success',
        })
      },
    }
  )
}

export default useCreateProject
