import { SignedIn, SignedOut, useSignIn } from "@clerk/clerk-react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { MouseEvent, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthRequestBody, AuthRequestSchema } from "shared/types/auth"

import ControlledTextField from "@/components/fields/ControlledTextField"
import useAuthContext from "@/contexts/AuthContext"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { loginMutation } = useAuthContext()
  const navigate = useNavigate()
  const { isLoaded, signIn, setActive } = useSignIn()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(AuthRequestSchema.body),
  })

  const toggleShowPassword = (e: MouseEvent) => {
    e.preventDefault()
    setShowPassword((prev) => !prev)
  }

  const onClickSignup = () => {
    navigate("/signup")
  }

  useEffect(() => {
    if (loginMutation.error) setErrorMessage("Login failed")
  }, [loginMutation.error])

  if (!isLoaded) return null

  const onSubmit = async (data: AuthRequestBody) => {
    await signIn
      .create({
        identifier: data.username,
        password: data.password,
      })
      .then(async (res) => {
        if (res.status === "complete") {
          if (res.createdSessionId) {
            await setActive({ session: res.createdSessionId })
            navigate("/dashboard")
          }
        }
      })
      .catch((err) => {
        setErrorMessage(err.errors[0].message)
      })
  }

  return (
    <>
      <SignedOut>
        <Box
          sx={(theme) => ({
            background: theme.fn.gradient({
              deg: 0,
              from: theme.fn.primaryColor(),
              // to: theme.fn.lighten(theme.fn.primaryColor(), 0.5),
              to: theme.fn.darken(theme.fn.primaryColor(), 0.5),
            }),
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Title
            size="h3"
            sx={(theme) => ({
              fontWeight: 900,
              color: theme.white,
              fontSize: "4rem",
              position: "absolute",
              top: 0,
              left: 0,
              margin: "1rem",
            })}
          >
            tido
          </Title>
          <Container>
            <Stack
              spacing={0}
              sx={(_theme) => ({
                width: "100%",
              })}
            >
              <Title
                align="center"
                size="h2"
                sx={(theme) => ({
                  fontWeight: 400,
                  color: theme.white,
                  opacity: 0.6,
                })}
              >
                Welcome back.
              </Title>
            </Stack>
            <Paper
              withBorder
              shadow="md"
              p={30}
              radius="md"
              component="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              {errorMessage && <Text color="red">{errorMessage}</Text>}

              <ControlledTextField
                control={control}
                name="username"
                label="Username"
                TextInputProps={{
                  autoFocus: true,
                  autoComplete: "username",
                }}
              />
              <ControlledTextField
                control={control}
                name="password"
                label="Password"
                TextInputProps={{
                  type: showPassword ? "text" : "password",
                  rightSection: (
                    <ActionIcon onMouseDown={toggleShowPassword}>
                      {showPassword ? <IconEyeOff /> : <IconEye />}
                    </ActionIcon>
                  ),
                }}
              />
              <Group position="apart" mt="lg">
                <Checkbox label="Remember me" />
                <Anchor component="button" size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Button fullWidth mt="xl" type="submit">
                Sign in
              </Button>
              <Text color="dimmed" size="sm" align="center" mt="sm">
                New around here?{" "}
                <Button variant="subtle" onClick={onClickSignup}>
                  Sign Up
                </Button>
              </Text>
            </Paper>
          </Container>
        </Box>
      </SignedOut>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>
    </>
  )
}
export default LoginPage
