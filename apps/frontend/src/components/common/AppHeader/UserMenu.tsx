import {
  Avatar,
  Group,
  MantineColorScheme,
  Menu,
  SegmentedControl,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core"
import { useNavigate } from "react-router-dom"

import useAuthContext from "@/contexts/AuthContext"
import useGetMe from "@/hooks/api/auth/useGetMe"

const UserMenu = () => {
  const { colorScheme, setColorScheme: setMantineColorScheme } =
    useMantineColorScheme()
  const { logoutMutation } = useAuthContext()
  const navigate = useNavigate()
  const { data: me } = useGetMe()

  const handleLogout = async () => {
    await logoutMutation.mutateAsync({}).finally(() => {
      navigate("/login")
    })
  }
  const setColorScheme = (val: "dark" | "light" | "auto") => {
    setMantineColorScheme(val)
  }

  return (
    <Menu width={200} closeOnItemClick={false} withArrow trigger="click">
      <Menu.Target>
        <Avatar
          radius="sm"
          size={"sm"}
          style={{ cursor: "pointer" }}
          color="primary"
        />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          style={() => ({
            "&[data-hovered]": {
              backgroundColor: "transparent",
              cursor: "default",
            },
          })}
        >
          <Group gap="sm" dir="row">
            <Avatar radius="sm" size="md" color="primary" />
            <Stack gap={0}>
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
        <Menu.Item
          style={() => ({
            "&:hover": {
              backgroundColor: "transparent",
              cursor: "default",
            },
          })}
        >
          <SegmentedControl
            data={["light", "auto", "dark"]}
            value={colorScheme}
            onChange={(val) => setColorScheme(val as MantineColorScheme)}
          />
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={handleLogout}>Log out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMenu
