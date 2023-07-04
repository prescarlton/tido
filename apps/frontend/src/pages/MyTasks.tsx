import { Text, Title } from "@mantine/core"

import PageWrapper from "@/layouts/PageLayout"

const MyTasksPage = () => {
  return (
    <PageWrapper>
      <Title size="h1">My Tasks</Title>
      <Text color="dimmed">
        {`There's nothing here yet, but eventually there will be. I promise.`}
      </Text>
    </PageWrapper>
  )
}

export default MyTasksPage
