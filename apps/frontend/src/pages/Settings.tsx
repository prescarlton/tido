import { Text, Title } from "@mantine/core"

import PageWrapper from "@/layouts/PageLayout"

const SettingsPage = () => {
  return (
    <PageWrapper>
      <Title size="h1">Settings</Title>
      <Text c="dimmed">
        {`There's nothing here yet, but eventually there will be. I promise.`}
      </Text>
    </PageWrapper>
  )
}

export default SettingsPage
