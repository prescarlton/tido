import { Avatar, Tooltip, useMantineTheme } from "@mantine/core"
import { ShortUser } from "shared/types/users"

interface IUserProfilePicture {
  user: ShortUser
  enableTooltip?: boolean
}

const UserProfilePicture = ({ user, enableTooltip }: IUserProfilePicture) => {
  const theme = useMantineTheme()

  const userInitials = user.firstName[0] + user.lastName[0]

  return (
    <Tooltip
      disabled={!enableTooltip}
      label={`${user.firstName} ${user.lastName}`}
    >
      <Avatar radius="xl" color={theme.primaryColor} size="sm">
        {userInitials}
      </Avatar>
    </Tooltip>
  )
}

export default UserProfilePicture
