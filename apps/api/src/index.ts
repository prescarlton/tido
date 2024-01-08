import "dotenv/config"

import express from "express"

import setupMiddleware from "@/middleware/setupMiddleware"
import verifyUser from "@/middleware/verifyUser"

import AuthRouter from "./routes/auth/routes"
import FavoritesRouter from "./routes/favorites/routes"
import ProjectRouter from "./routes/projects/routes"
import UserRouter from "./routes/users/routes"
import WorkspaceRouter from "./routes/workspaces/routes"

const app = express()
setupMiddleware(app)

app.use("/auth", AuthRouter)
app.use("/users", verifyUser, UserRouter)
app.use("/projects", verifyUser, ProjectRouter)
app.use("/favorites", verifyUser, FavoritesRouter)
app.use("/workspaces", verifyUser, WorkspaceRouter)

app.get("/", (_req, res) => {
  res.json({ message: "Tido API" })
})

app.listen(process.env.PORT, () =>
  console.info(`Server is running on port ${process.env.PORT}`),
)
