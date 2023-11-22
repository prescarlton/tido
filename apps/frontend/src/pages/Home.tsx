import { useUser } from "@clerk/clerk-react"
import { Box, Text, Title } from "@mantine/core"

import ProjectList from "@/components/home/ProjectList"
import PageWrapper from "@/layouts/PageLayout"

const HomePage = () => {
  const { user } = useUser()

  return (
    <PageWrapper>
      <Box
        sx={{
          py: 2,
          px: 3,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Title size="h4">
            Welcome back, {user?.firstName || user?.username}.
          </Title>
          <Text sx={{ opacity: 0.6 }}>Let&apos;s get stuff done today.</Text>
        </Box>
        <ProjectList />
        {/* <MyTasks /> */}
      </Box>
    </PageWrapper>
  )
}
export default HomePage
