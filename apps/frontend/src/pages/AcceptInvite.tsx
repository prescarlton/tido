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
  LoadingOverlay,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import { MouseEvent, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Navigate, useParams, useSearchParams } from "react-router-dom"
import { AuthRequestBody, AuthRequestSchema } from "shared/types/auth"

import ControlledTextField from "@/components/fields/ControlledTextField"
import useGetInviteDetails from "@/hooks/api/auth/useGetInviteDetails"

const AcceptInvitePage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [searchParams] = useSearchParams()
  const code = searchParams.get("code")
  if (!code) return <Navigate to="/signup" replace />

  const { data: inviteDetails, isPending } = useGetInviteDetails({ code })
  const { control, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(AuthRequestSchema.body),
  })

  const onSubmit = async (data: AuthRequestBody) => { }

  const toggleShowPassword = (e: MouseEvent) => {
    e.preventDefault()
    setShowPassword((prev) => !prev)
  }

  useEffect(() => {
    if (inviteDetails) {
      setValue("email", inviteDetails.email)
    }
  }, [inviteDetails])

  if (isPending || !inviteDetails) return <LoadingOverlay />

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
      <Container>
        <Stack
          gap={0}
          style={(theme) => ({
            position: "absolute",
            top: theme.spacing.lg,
            left: 0,
            right: 0,
            width: "100%",
          })}
        >
          <Title
            size="h1"
            ta="center"
            style={(theme) => ({
              fontWeight: 900,
              color: theme.white,
              fontSize: "4rem",
            })}
          >
            tido
          </Title>
          <Title
            ta="center"
            size="h2"
            style={(theme) => ({
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
            name="email"
            label="Email"
            TextInputProps={{ disabled: true }}
          />
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
          <ControlledTextField
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            TextInputProps={{
              type: showPassword ? "text" : "password",
              rightSection: (
                <ActionIcon onMouseDown={toggleShowPassword}>
                  {showPassword ? <IconEyeOff /> : <IconEye />}
                </ActionIcon>
              ),
            }}
          />
          <Button fullWidth mt="xl" type="submit">
            Accept Invite
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}
export default AcceptInvitePage
