import { useQuery } from "@tanstack/react-query"

import favoritesQueries from "@/api/FavoritesService"

const useGetMyFavorites = () =>
  useQuery({ ...favoritesQueries.all, select: (res) => res.data.data })

export default useGetMyFavorites
