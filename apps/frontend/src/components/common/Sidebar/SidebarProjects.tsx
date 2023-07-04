import {
  ActionIcon,
  Flex,
  Group,
  Navbar,
  rem,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { Plus } from "tabler-icons-react"

import useListProjects from "@/hooks/api/projects/useListProjects"

import SidebarProjectItem from "./SidebarProjectItem"

const SidebarProjects = () => {
  const onClickCreateProject = () => {}

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
        })}
      >
        <Text size="xs" c="dimmed" weight={500}>
          Projects
        </Text>
        <Group spacing={theme.spacing.sm}>
          <ActionIcon
            onClick={onClickCreateProject}
            variant="default"
            size="xs"
          >
            <Plus size="0.8em" />
          </ActionIcon>
        </Group>
      </Group>
      <Flex
        direction="column"
        sx={(theme) => ({
          paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
          paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
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
