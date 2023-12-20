import "../auth"

import { PrismaSessionStore } from "@quixo3/prisma-session-store"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import { PrismaClient } from "database"
import { Application } from "express"
import session from "express-session"
import passport from "passport"

const setupMiddleware = (app: Application) => {
  app.use(cookieParser())
  app.use(
    session({
      secret: process.env.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false,
        sameSite: false,
        httpOnly: true,
      },
      store: new PrismaSessionStore(new PrismaClient(), {
        checkPeriod: 2 * 60 * 1000, // ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }),
    }),
  )
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://tidoapp.dev",
        "https://app.tido.work",
      ],
      credentials: true,
    }),
  )

  // app.use(helmet())
  app.use(bodyParser.json({ limit: "5mb" }))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(passport.initialize())
  app.use(passport.session())
}

export default setupMiddleware
