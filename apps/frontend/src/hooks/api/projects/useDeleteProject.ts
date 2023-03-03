import { useMutation } from '@tanstack/react-query'
import { DeleteProjectParams } from 'shared/types/projects'

import ProjectService, { DELETE_PROJECT_QUERY_KEY } from '@/api/ProjectService'
import useSnackbarContext from '@/contexts/SnackbarContext'

const deleteProject = (data: DeleteProjectParams) =>
  ProjectService.delete(`/${data.id}`).then((res) => res.data.data)

const useDeleteProject = () => {
  const { openSnackbar } = useSnackbarContext()

  return useMutation(
    DELETE_PROJECT_QUERY_KEY,
    (data: DeleteProjectParams) => deleteProject(data),
    {
      onSuccess: () => {
        openSnackbar({
          message: 'Project successfully deleted',
          type: 'success',
        })
      },
      onError: () => {
        openSnackbar({
          message: 'Unable to delete project',
          type: 'error',
        })
      },
    }
  )
}

export default useDeleteProject
