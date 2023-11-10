import {
  ActionIcon,
  Flex,
  Group,
  Navbar,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"

import useListProjects from "@/hooks/api/projects/useListProjects"

import NewProjectMenu from "../NewProjectMenu"
import SidebarProjectItem from "./SidebarProjectItem"

const SidebarProjects = () => {
  const { data: projects } = useListProjects()
  const theme = useMantineTheme()

  return (
    <Navbar.Section
      sx={(theme) => ({
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        marginBottom: theme.spacing.md,
      })}
    >
      <Group
        position="apart"
        sx={(theme) => ({
          paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
          paddingRight: theme.spacing.md,
          marginBottom: rem(5),
          flexWrap: "nowrap",
        })}
      >
        <Text size="xs" c="dimmed" weight={500}>
          Projects
        </Text>
        <Group spacing={theme.spacing.sm}>
          <NewProjectMenu>
            <ActionIcon variant="default" size="xs">
              <IconPlus size="0.8em" />
            </ActionIcon>
          </NewProjectMenu>
        </Group>
      </Group>
      <Flex
        direction="column"
        sx={(theme) => ({
          padding: `calc(${theme.spacing.md} - ${rem(6)})`,
          paddingBottom: theme.spacing.md,
        })}
      >
        {projects?.map((project) => (
          <SidebarProjectItem key={project.id} project={project} />
        ))}
      </Flex>
    </Navbar.Section>
  )
}

export default SidebarProjects
