import { Box, Button, Text, Title } from "@mantine/core"
import { useNavigate } from "react-router-dom"

import PageWrapper from "@/layouts/PageLayout"

const NotFoundPage = () => {
  const navigate = useNavigate()
  const onClick = () => navigate("/")
  return (
    <PageWrapper>
      <Box
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title variant="h1">Uh-oh!</Title>
        <Text c="dimmed">{`The page you're trying to access doesn't exist`}</Text>
        <Button variant="outline" onClick={onClick} style={{ marginTop: 12 }}>
          Go Home
        </Button>
      </Box>
    </PageWrapper>
  )
}

export default NotFoundPage
