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
import { AxiosError } from "axios"
import { MouseEvent, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { AuthRequestBody, AuthRequestSchema } from "shared/types/auth"

import ControlledTextField from "@/components/fields/ControlledTextField"
import useAuthContext from "@/contexts/AuthContext"

const SignupPage = () => {
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

  const onClickLogin = () => navigate("/login")

  useEffect(() => {
    if (loginMutation.error) setErrorMessage("Login failed")
  }, [loginMutation.error])

  useEffect(() => {
    if (formState.errors && formState.isSubmitted)
      setErrorMessage("Username and password are required")
  }, [formState.errors, formState.isSubmitted])

  return (
    <Box
      sx={(theme) => ({
        background: theme.fn.gradient(),
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <Container>
        <Stack
          spacing={0}
          sx={(theme) => ({
            position: "absolute",
            top: theme.spacing.lg,
            left: 0,
            right: 0,
            width: "100%",
          })}
        >
          <Title
            size="h1"
            align="center"
            sx={(theme) => ({
              fontWeight: 900,
              color: theme.white,
              fontSize: "4rem",
            })}
          >
            tido
          </Title>
          <Title
            align="center"
            size="h2"
            sx={(theme) => ({
              fontWeight: 400,
              color: theme.white,
              opacity: 0.6,
            })}
          >
            Your projects will never be the same.
          </Title>
        </Stack>

        <Paper
          withBorder
          shadow="md"
          p={30}
          mt={30}
          radius="md"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {errorMessage && <Text color="red">{errorMessage}</Text>}

          <ControlledTextField
            control={control}
            name="username"
            label="Username"
            TextInputProps={{ autoFocus: true }}
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
            Sign Up
          </Button>
          <Text color="dimmed" size="sm" align="center" mt="sm">
            Already running successful projects?{" "}
            <Button variant="subtle" onClick={onClickLogin}>
              Log In
            </Button>
          </Text>
        </Paper>
      </Container>
    </Box>
  )
}
export default SignupPage
