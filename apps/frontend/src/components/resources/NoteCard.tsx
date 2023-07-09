import { faker } from "@faker-js/faker"
import { Box, Card } from "@mantine/core"

const NoteCard = () => {
  const content = faker.lorem.paragraph({ min: 1, max: 6 })
  return (
    <Card
      sx={{
        width: "12rem",
        maxHeight: "12rem",
        px: 1,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {content}
      </Box>
    </Card>
  )
}

export default NoteCard
