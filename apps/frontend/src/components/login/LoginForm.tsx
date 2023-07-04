import { zodResolver } from "@hookform/resolvers/zod"
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"
import { AxiosError } from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthRequestBody, AuthRequestSchema } from "shared/types/auth"
import { Eye, EyeOff } from "tabler-icons-react"

import useAuthContext from "@/contexts/AuthContext"

import ControlledTextField from "../fields/ControlledTextField"

const LoginForm = ({ switchForm }: { switchForm: () => void }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const { loginMutation } = useAuthContext()

  const toggleShowPassword = (e: MouseEvent) => {
    e.preventDefault()
    setShowPassword((prev) => !prev)
  }
  const defaultValues: AuthRequestBody = {
    username: "",
    password: "",
  }
  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues,
    resolver: zodResolver(AuthRequestSchema.body),
  })

  const onSubmit = async (data: AuthRequestBody) => {
    await loginMutation
      .mutateAsync(data)
      .catch((err: AxiosError<{ message: string }>) => {
        setErrorMessage(err.response?.data.message ?? "Login failed")
      })
  }

  const handleSwitchForm = () => {
    reset()
    switchForm()
  }

  useEffect(() => {
    if (loginMutation.error) setErrorMessage("Login failed")
  }, [loginMutation.error])

  useEffect(() => {
    if (formState.errors && formState.isSubmitted)
      setErrorMessage("Username and password are required")
  }, [formState.errors, formState.isSubmitted])

  const theme = useMantineTheme()
  return (
    <Box
      sx={{
        width: "50%",
        p: 24,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box>
        <Title size="h1">Log In</Title>
        {errorMessage && (
          <Text color={theme.colors.red[6]}>{errorMessage}</Text>
        )}
      </Box>
      <Stack spacing={"sm"}>
        <ControlledTextField
          control={control}
          name="username"
          label="Username"
          disableError
        />
        <ControlledTextField
          control={control}
          name="password"
          label="Password"
          TextInputProps={{
            type: showPassword ? "text" : "password",
            rightSection: (
              <ActionIcon onMouseDown={toggleShowPassword}>
                {showPassword ? <EyeOff /> : <Eye />}
              </ActionIcon>
            ),
          }}
          disableError
        />
        <Button type="submit" variant="gradient">
          Login
        </Button>
      </Stack>
      <Group>
        <Text c="dimmed" size="sm">
          New around here?
        </Text>
        <Button
          onClick={handleSwitchForm}
          variant="text"
          sx={{ textTransform: "none" }}
        >
          Create an account
        </Button>
      </Group>
    </Box>
  )
}
export default LoginForm
