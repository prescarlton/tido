import { Group, Skeleton, Stack, Title } from "@mantine/core"
import { range } from "lodash"

const MyProjectsLoading = () => {
  return (
    <Stack spacing="sm">
      <Title size="h3">Projects</Title>
      <Group spacing="md">
        {range(0, 5).map((i) => (
          <Skeleton key={i} variant="rectangular" width={225} height={75} />
        ))}
      </Group>
    </Stack>
  )
}

export default MyProjectsLoading
