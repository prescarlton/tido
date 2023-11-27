import { Box, Text, Title } from "@mantine/core"

import ProjectList from "@/components/home/ProjectList"
import useGetMe from "@/hooks/api/auth/useGetMe"
import PageWrapper from "@/layouts/PageLayout"

const HomePage = () => {
  const { data: me } = useGetMe()
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
            Welcome back, {me?.firstName || me?.username}.
          </Title>
          <Text sx={{ opacity: 0.6 }}>{"Let's get stuff done today."}</Text>
        </Box>
        <ProjectList />
        {/* <MyTasks /> */}
      </Box>
    </PageWrapper>
  )
}
export default HomePage
