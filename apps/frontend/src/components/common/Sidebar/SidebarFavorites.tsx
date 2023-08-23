import {
  ActionIcon,
  Collapse,
  Flex,
  Group,
  Navbar,
  rem,
  Text,
} from "@mantine/core"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import { useState } from "react"
import { Project } from "shared/types/projects"

import useGetMyFavorites from "@/hooks/api/favorites/useGetMyFavorites"

import SidebarProjectItem from "./SidebarProjectItem"

const SidebarFavorites = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => setOpen((prev) => !prev)

  const { data: favorites } = useGetMyFavorites()

  return (
    <Navbar.Section
      sx={(theme) => ({
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        marginBottom: theme.spacing.md,
        paddingBottom: theme.spacing.md,
        borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[3]
          }`,
      })}
    >
      <Group
        position="apart"
        sx={(theme) => ({
          paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
          paddingRight: theme.spacing.md,
          marginBottom: rem(5),
        })}
      >
        <Text size="xs" c="dimmed" weight={500}>
          Favorites
        </Text>
        <ActionIcon onClick={toggleCollapse} size="xs">
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </ActionIcon>
      </Group>
      <Collapse in={open}>
        <Flex
          direction="column"
          sx={(theme) => ({
            padding: `calc(${theme.spacing.md} - ${rem(6)})`,
            paddingBottom: theme.spacing.md,
          })}
        >
          {favorites?.projects.map((project) => (
            <SidebarProjectItem key={project.id} project={project as Project} />
          ))}
        </Flex>
      </Collapse>
    </Navbar.Section>
  )
}

export default SidebarFavorites
