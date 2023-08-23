import { Router } from "express"

import getMyFavorites from "./handlers/getMyFavorites"

const FavoritesRouter: Router = Router()

FavoritesRouter.get("/", getMyFavorites)

export default FavoritesRouter
