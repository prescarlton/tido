import { zodResolver } from "@hookform/resolvers/zod"
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  getGradient,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { AxiosError } from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { AuthRequestBody, AuthRequestSchema } from "shared/types/auth"

import ControlledTextField from "@/components/fields/ControlledTextField"
import useAuthContext from "@/contexts/AuthContext"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { loginMutation } = useAuthContext()
  const navigate = useNavigate()

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(AuthRequestSchema.body),
  })

  const onSubmit = async (data: AuthRequestBody) => {
    await loginMutation
      .mutateAsync(data)
      .catch((err: AxiosError<{ message: string }>) => {
        setErrorMessage(err.response?.data.message ?? "Login failed")
      })
  }

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

  useEffect(() => {
    if (formState.errors && formState.isSubmitted)
      setErrorMessage("Username and password are required")
  }, [formState.errors, formState.isSubmitted])

  return (
    <Box
      style={(theme) => ({
        background: getGradient(undefined, theme),
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <Title
        size="h3"
        style={(theme) => ({
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
          gap={0}
          style={(theme) => ({
            width: "100%",
          })}
        >
          <Title
            size="h2"
            style={(theme) => ({
              fontWeight: 400,
              color: theme.white,
              opacity: 0.6,
              textAlign: "center",
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
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
          <Text c="dimmed" size="sm" ta="center" mt="sm">
            New around here?{" "}
            <Button variant="subtle" onClick={onClickSignup}>
              Sign Up
            </Button>
          </Text>
        </Paper>
      </Container>
    </Box>
  )
}
export default LoginPage
