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
import { useForm } from "react-hook-form"
import { AuthRequestBody, AuthRequestSchema } from "shared/types/auth"

import ControlledTextField from "@/components/fields/ControlledTextField"
const SignupForm = ({ switchForm }: { switchForm: () => void }) => {
  const defaultValues: AuthRequestBody = {
    username: "",
    password: "",
  }
  const { handleSubmit, reset, control } = useForm({
    defaultValues,
    resolver: zodResolver(AuthRequestSchema.body),
  })

  const onSubmit = (data: AuthRequestBody) => {
    console.info(data)
  }

  const handleSwitchForm = () => {
    reset()
    switchForm()
  }

  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box sx={{}}>
        <Title size="h1">Sign up</Title>
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
export default SignupForm
