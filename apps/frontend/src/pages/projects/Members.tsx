import { Text, Title } from "@mantine/core"

import PageWrapper from "@/layouts/PageLayout"

const MembersPage = () => {
  return (
    <PageWrapper>
      <Title size="h1">Members</Title>
      <Text c="dimmed">
        This here is where {`I'll`} put a list of members in my workspace
      </Text>
    </PageWrapper>
  )
}
export default MembersPage
