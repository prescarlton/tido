import { Flex, Group, Stack, Text, Tooltip } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react"
import dayjs from "dayjs"
import { TaskActivity } from "shared/types/tasks"

import UserProfilePicture from "@/components/common/UserProfilePicture"

interface IActivityItem {
  activity: TaskActivity
}

const ActivityItem = ({ activity }: IActivityItem) => {
  return (
    <Stack gap={0}>
      <Group justify="space-between" align="center">
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
      <Group gap="xs" wrap="nowrap">
        <Text size="xs" lineClamp={1}>
          {activity.oldVal}
        </Text>
        <IconArrowRight size={16} />
        <Text size="xs" lineClamp={1}>
          {activity.newVal}
        </Text>
      </Group>
    </Stack>
  )
}

export default ActivityItem
