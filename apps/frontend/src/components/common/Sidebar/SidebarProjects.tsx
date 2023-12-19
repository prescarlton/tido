import { ActionIcon, AppShell, Box, Group, Text } from "@mantine/core"
import { IconPlus } from "@tabler/icons-react"

import useListProjects from "@/hooks/api/projects/useListProjects"

import NewProjectMenu from "../NewProjectMenu"
import styles from "./sidebar.module.scss"
import SidebarProjectItem from "./SidebarProjectItem"

const SidebarProjects = () => {
  const { data: projects } = useListProjects()
  return (
    <AppShell.Section className={styles.section}>
      <Group className={styles.sectionHeader}>
        <Text size="sm" c="dimmed">
          Projects
        </Text>
        <NewProjectMenu>
          <ActionIcon variant="default" size="xs">
            <IconPlus size="0.8em" />
          </ActionIcon>
        </NewProjectMenu>
      </Group>
      <Box className={styles.sectionItemList}>
        {projects?.map((project) => (
          <SidebarProjectItem key={project.id} project={project} />
        ))}
      </Box>
    </AppShell.Section>
  )
}

export default SidebarProjects
