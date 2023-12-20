import {
  Avatar,
  Paper,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"
import { ShortUser } from "shared/types/users"

interface IUserChip {
  user: ShortUser
}

const UserChip = ({ user }: IUserChip) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const initials =
    user.firstName && user.lastName ? user.firstName[0] + user.lastName[0] : ""
  return (
    <Paper
      radius="xl"
      style={(theme) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing.xxs,
        height: 32,
        gap: theme.spacing.xxs,
        backgroundColor:
          colorScheme === "dark" ? theme.colors.gray[9] : theme.colors.gray[0],
      })}
    >
      <Avatar radius="xl" color={theme.primaryColor} size="sm">
        {initials}
      </Avatar>
      <Text size="sm">
        {user.firstName} {user.lastName}
      </Text>
    </Paper>
  )
}

export default UserChip
