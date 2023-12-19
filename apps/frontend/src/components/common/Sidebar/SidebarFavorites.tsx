import { ActionIcon, AppShell, Box, Collapse, Group, Text } from "@mantine/core"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import { useState } from "react"
import { Project } from "shared/types/projects"

import useGetMyFavorites from "@/hooks/api/favorites/useGetMyFavorites"

import styles from "./sidebar.module.scss"
import SidebarProjectItem from "./SidebarProjectItem"

const SidebarFavorites = () => {
  const [open, setOpen] = useState(true)

  const toggleCollapse = () => setOpen((prev) => !prev)

  const { data: favorites } = useGetMyFavorites()

  return (
    <AppShell.Section className={styles.section}>
      <Group className={styles.sectionHeader}>
        <Text size="sm" c="dimmed">
          Favorites
        </Text>
        <ActionIcon onClick={toggleCollapse} size="xs">
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </ActionIcon>
      </Group>
      <Collapse in={open}>
        <Box className={styles.sectionItemList}>
          {favorites?.projects.length ? (
            favorites.projects.map((project) => (
              <SidebarProjectItem
                key={project.id}
                project={project as Project}
              />
            ))
          ) : (
            <Text size="xs">You have no favorites.</Text>
          )}
        </Box>
      </Collapse>
    </AppShell.Section>
  )
}

export default SidebarFavorites
