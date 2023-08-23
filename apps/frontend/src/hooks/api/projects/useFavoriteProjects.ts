import { notifications } from "@mantine/notifications"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"

import { favoriteProject, PROJECTS_QUERY_KEY } from "@/api/ProjectService"

const useFavoriteProject = () => {
  const queryClient = useQueryClient()

  return useMutation(favoriteProject, {
    onSuccess: () => {
      notifications.show({
        message: "Favorited Project",
        color: "green",
      })
      queryClient.invalidateQueries(PROJECTS_QUERY_KEY.all)
    },
    onError: (error: AxiosError) => {
      notifications.show({
        message: error?.message || "Unable to favorite project",
        color: "red",
      })
    },
  })
}

export default useFavoriteProject
