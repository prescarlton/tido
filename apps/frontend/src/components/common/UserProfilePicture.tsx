import { Avatar, Tooltip, useMantineTheme } from "@mantine/core"
import { ShortUser } from "shared/types/users"

interface IUserProfilePicture {
  user: ShortUser
  enableTooltip?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

const UserProfilePicture = ({
  user,
  enableTooltip,
  size = "sm",
}: IUserProfilePicture) => {
  const theme = useMantineTheme()

  const userInitials =
    user.firstName && user.lastName
      ? user.firstName[0] + user.lastName[0]
      : user.username[0]

  return (
    <Tooltip
      disabled={!enableTooltip}
      label={`${user.firstName} ${user.lastName}`}
    >
      <Avatar radius="xl" color={theme.primaryColor} size={size}>
        {userInitials}
      </Avatar>
    </Tooltip>
  )
}

export default UserProfilePicture
