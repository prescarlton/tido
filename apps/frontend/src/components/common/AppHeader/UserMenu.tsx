import {
  Avatar,
  Group,
  Menu,
  Stack,
  Switch,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

import useAuthContext from "@/contexts/AuthContext"
import useGetMe from "@/hooks/api/auth/useGetMe"

const UserMenu = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()
  const { logoutMutation } = useAuthContext()
  const navigate = useNavigate()
  const { data: me } = useGetMe()

  const handleLogout = async () => {
    await logoutMutation.mutateAsync({}).finally(() => {
      navigate("/login")
    })
  }

  return (
    <Menu width={200} closeOnItemClick={false} withArrow trigger="click">
      <Menu.Target>
        <Avatar
          radius="sm"
          size={"sm"}
          sx={{ cursor: "pointer" }}
          color="primary"
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          sx={(theme) => ({
            "&[data-hovered]": {
              backgroundColor: "transparent",
              cursor: "default",
            },
          })}
        >
          <Group spacing="sm" dir="row">
            <Avatar radius="sm" size="md" color="primary" />
            <Stack spacing={0}>
              {me?.firstName && (
                <Text size="xs">
                  {me.firstName} {me.lastName}
                </Text>
              )}
              <Text size="xs" c="dimmed">
                {me?.username}
              </Text>
            </Stack>
          </Group>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>Account Settings</Menu.Item>
        <Menu.Item>
          <Group>
            <Switch
              checked={colorScheme === "dark"}
              onChange={() => toggleColorScheme()}
              label="Dark Mode"
              labelPosition="left"
              onLabel={
                <IconSun color={theme.white} size="1.25rem" strokeWidth={1.5} />
              }
              offLabel={
                <IconMoon
                  color={theme.colors.gray[6]}
                  size="1.25rem"
                  strokeWidth={1.5}
                />
              }
            />
          </Group>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMenu
