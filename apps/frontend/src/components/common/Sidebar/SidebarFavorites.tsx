import { Group, Navbar, rem, Text } from "@mantine/core"
import { useState } from "react"

const SidebarFavorites = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => setOpen((prev) => !prev)

  return (
    <Navbar.Section
      sx={(theme) => ({
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        marginBottom: theme.spacing.md,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        paddingBottom: theme.spacing.md,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[3]
          }`,
      })}
    >
      <Group position="apart">
        <Text size="xs" c="dimmed" weight={500}>
          Favorites
        </Text>
      </Group>
    </Navbar.Section>
  )
}

export default SidebarFavorites
