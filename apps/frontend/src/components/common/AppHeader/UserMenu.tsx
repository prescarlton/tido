import {
  Avatar,
  Box,
  Group,
  Menu,
  Stack,
  Switch,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core"
import { Moon, Sun } from "tabler-icons-react"

const UserMenu = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()

  return (
    <Menu width={200} closeOnItemClick={false} withArrow>
      <Menu.Target>
        <Tooltip label="Account">
          <Avatar radius="xl" size={"sm"} sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          sx={{
            "&[data-hovered]": {
              backgroundColor: "transparent",
              cursor: "default",
            },
          }}
        >
          <Group spacing="sm" dir="row">
            <Avatar radius="xl" size="md" />
            <Stack spacing={0}>
              <Text size="xs">Preston Carlton</Text>
              <Text size="xs" c="dimmed">
                preston
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
                <Sun color={theme.white} size="1.25rem" strokeWidth={1.5} />
              }
              offLabel={
                <Moon
                  color={theme.colors.gray[6]}
                  size="1.25rem"
                  strokeWidth={1.5}
                />
              }
            />
          </Group>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default UserMenu
