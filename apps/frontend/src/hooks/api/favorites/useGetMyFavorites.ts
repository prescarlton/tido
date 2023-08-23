import { useQuery } from "@tanstack/react-query"
import { GetMyFavoritesResponse } from "shared/types/favorites"

import { FavoritesService } from "@/api/FavoritesService"
import { MY_FAVORITES_QUERY_KEY } from "@/api/FavoritesService/constants"

export const getMyFavorites = () =>
  FavoritesService.get<GetMyFavoritesResponse>("/")

const useGetMyFavorites = () =>
  useQuery({
    queryKey: MY_FAVORITES_QUERY_KEY.all,
    queryFn: getMyFavorites,
    select: (res) => res.data.data,
  })

export default useGetMyFavorites
