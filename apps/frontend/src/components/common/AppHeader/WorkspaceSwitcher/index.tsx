import { Box, Group, Menu, Skeleton, Text, UnstyledButton } from "@mantine/core"

import useAppContext from "@/contexts/AppContext"
import useListMyWorkspaces from "@/hooks/api/workspaces/useListMyWorkspaces"
import useSetActiveWorkspace from "@/hooks/api/workspaces/useSetActiveWorkspace"
import styles from "./styles.module.scss"
import { IconSelector } from "@tabler/icons-react"

const WorkspaceSwitcher = () => {
  const { data: workspaces } = useListMyWorkspaces()
  const { activeWorkspaceId } = useAppContext()
  const setActiveWorkspace = useSetActiveWorkspace()

  if (!workspaces) return <Skeleton height={32} width={180} />

  const onChange = async (value: string | null) => {
    if (value) await setActiveWorkspace.mutateAsync({ workspaceId: value })
  }

  // make the list into a prettier list for selectability
  const options = workspaces.map((workspace) => ({
    value: workspace.id,
    label: workspace.name,
  }))

  const activeWorkspace = workspaces.find(
    (workspace) => workspace.id === activeWorkspaceId,
  )

  return (
    <Menu>
      <Menu.Target>
        <UnstyledButton className={styles.workspaceSelect}>
          <Group gap="sm">
            <Box className={styles.workspaceLogo} />
            <Text className={styles.workspaceName}>
              {activeWorkspace?.name}
            </Text>
          </Group>
          <IconSelector />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {options.map((opt) => (
          <Menu.Item key={opt.value}>
            <Menu.Label>{opt.label}</Menu.Label>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}
export default WorkspaceSwitcher
