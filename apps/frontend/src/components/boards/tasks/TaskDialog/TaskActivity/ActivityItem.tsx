import { Flex, Group, Stack, Text, Tooltip } from "@mantine/core"
import dayjs from "dayjs"
import { TaskActivity } from "shared/types/tasks"
import { ArrowRight } from "tabler-icons-react"

import UserProfilePicture from "@/components/common/UserProfilePicture"

interface IActivityItem {
  activity: TaskActivity
}

const ActivityItem = ({ activity }: IActivityItem) => {
  return (
    <Stack spacing={0}>
      <Group position="apart" align="center">
        <Flex gap="sm" align="center">
          <UserProfilePicture user={activity.user} enableTooltip />
          <Text size="sm">{activity.message}</Text>
        </Flex>
        <Tooltip
          label={dayjs(activity.created).format("MMM DD, YYYY @ h:mm A")}
        >
          <Text c="dimmed" size="sm">
            {dayjs(activity.created).fromNow()}
          </Text>
        </Tooltip>
      </Group>
      <Group spacing="xs" noWrap>
        <Text size="xs" lineClamp={1}>
          {activity.oldVal}
        </Text>
        <ArrowRight size={16} />
        <Text size="xs" lineClamp={1}>
          {activity.newVal}
        </Text>
      </Group>
    </Stack>
  )
}

export default ActivityItem