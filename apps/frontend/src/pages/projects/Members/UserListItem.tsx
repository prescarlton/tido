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
      <Text style={{ flex: 1.5 }} size="sm">
        Member
      </Text>
      <Text style={{ flex: 1 }} size="sm">
        3 Projects
      </Text>
      <Text c="red" size="sm" style={{ flex: 1 }}>
        Inactive
      </Text>
      <Box style={{ flex: 0.25 }}>
        <ActionIcon>
          <IconDots />
        </ActionIcon>
      </Box>
    </Box>
  )
}
export default UserListItem
