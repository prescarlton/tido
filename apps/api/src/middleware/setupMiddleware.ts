import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import { Application } from "express"

const setupMiddleware = (app: Application) => {
  app.use(cookieParser())
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  )

  // app.use(helmet())
  app.use(bodyParser.json({ limit: "5mb" }))
  app.use(bodyParser.urlencoded({ extended: true }))
}

export default setupMiddleware
