import bcrypt from "bcrypt"
import { User } from "database"
import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"

import prisma from "@/utils/db"

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
    },
    async (username, password, done) => {
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      })
      // if no user found, return
      if (!user) return done("Invalid Credentials")

      // decode password and compare to what the user gave us
      const validPassword = await bcrypt.compare(password, user.password || "")
      // if user gave us a bad password, return
      if (!validPassword) return done("Invalid Credentials")

      // if we made it this far, the user is good to go
      return done(null, user)
    },
  ),
)

passport.serializeUser((user, done) => {
  done(null, (user as User).id)
})

passport.deserializeUser(async (id: string, done) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      username: true,
      email: true,
    },
  })
  if (!user) return done("No user to deserialize")

  return done(null, user)
})
