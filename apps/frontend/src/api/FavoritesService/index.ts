import { createQueryKeys } from "@lukemorales/query-key-factory"
import { GetMyFavoritesResponse } from "shared/types/favorites"

import { CreateApiService } from "../APIService"

const FavoritesService = CreateApiService({
  baseURL: "/favorites",
})

export const getMyFavorites = () =>
  FavoritesService.get<GetMyFavoritesResponse>("/")

const favoritesQueries = createQueryKeys("favorites", {
  all: {
    queryKey: null,
    queryFn: getMyFavorites,
  },
  projects: {
    queryKey: ["projects"],
  },
})
export default favoritesQueries
