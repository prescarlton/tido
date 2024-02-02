import { ActionIcon, Box, Checkbox, Group, Text } from "@mantine/core"
import { IconDots } from "@tabler/icons-react"
import { ListWorkspaceUsersResponse } from "shared/types/workspaces"

import UserProfilePicture from "@/components/common/UserProfilePicture"

import styles from "./styles.module.scss"

interface UserListItemProps {
  user: ListWorkspaceUsersResponse["data"][0]
}
const UserListItem = ({ user }: UserListItemProps) => {
  return (
    <Box className={styles.userListItem}>
      <Box className={styles.userProfile}>
        <Checkbox />
        <UserProfilePicture user={user.user} size="sm" />
        <Box className={styles.userName}>
          <Text fw="bold">
            {user.user.firstName} {user.user.lastName}
          </Text>
        </Box>
      </Box>
      {/*
      <Text c="dimmed" style={{ flex: 1 }}>
        {user.user.username}
      </Text>
      */}
      <Group gap="lg">
        <Text>Member</Text>
        <Text>3 Projects</Text>
        <ActionIcon c="dimmed">
          <IconDots />
        </ActionIcon>
      </Group>
    </Box>
  )
}
export default UserListItem
