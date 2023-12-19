import { Group, Skeleton, Stack, Title } from "@mantine/core"
import { range } from "lodash"

const MyProjectsLoading = () => {
  return (
    <Stack gap="sm">
      <Title size="h3">Projects</Title>
      <Group gap="md">
        {range(0, 5).map((i) => (
          <Skeleton key={i} variant="rectangular" width={225} height={75} />
        ))}
      </Group>
    </Stack>
  )
}

export default MyProjectsLoading
