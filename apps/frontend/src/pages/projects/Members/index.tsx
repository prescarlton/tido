import { Box, Button, Group, Input, Text, Title } from "@mantine/core"
import { IconUserPlus } from "@tabler/icons-react"

import useListWorkspaceUsers from "@/hooks/api/workspaces/useListWorkspaceUsers"
import PageWrapper from "@/layouts/PageLayout"

import styles from "./styles.module.scss"
import UserListItem from "./UserListItem"

const MembersPage = () => {
  const { data: users } = useListWorkspaceUsers()

  return (
    <PageWrapper>
      <Group justify="space-between" align="center" gap="sm" mb="md">
        <Title size="h1">Members</Title>
        <Group gap="sm">
          <Input placeholder="Search" variant="default" />
          <Button leftSection={<IconUserPlus />}>Invite User</Button>
        </Group>
      </Group>
      <Box className={styles.userList}>
        <Box className={styles.userListHeader}>
          <Text style={{ flex: 2 }} fw="bold">
            Name
          </Text>
          <Text style={{ flex: 1.5 }} fw="bold">
            Role
          </Text>
          <Text style={{ flex: 1 }} fw="bold">
            Projects
          </Text>
          <Text style={{ flex: 1 }} fw="bold">
            Billing Status
          </Text>
          <Box style={{ flex: 0.25 }} />
        </Box>
        <Box className={styles.userListInner}>
          {users?.map((user) => (
            <UserListItem key={user.user.id} user={user} />
          ))}
        </Box>
      </Box>
    </PageWrapper>
  )
}
export default MembersPage
