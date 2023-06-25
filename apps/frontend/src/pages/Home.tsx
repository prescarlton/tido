import { Box, Typography } from "@mui/material"

import ProjectList from "@/components/home/ProjectList"
import useGetMe from "@/hooks/api/useMe"
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
          gap: 5,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h3">Welcome back, {me?.firstName}!</Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.6 }}>
            Let&apos;s get shit done today.
          </Typography>
        </Box>
        <ProjectList />
        {/* <MyTasks /> */}
      </Box>
    </PageWrapper>
  )
}
export default HomePage
