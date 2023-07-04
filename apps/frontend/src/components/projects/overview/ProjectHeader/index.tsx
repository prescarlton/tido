import { Box, Button, Group, Header } from "@mantine/core"

import useProjectContext from "@/contexts/ProjectContext"

const ProjectHeader = () => {
  const { project } = useProjectContext()

  return (
    <Header height={60} p="sm">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Group>
          <Button
            variant="text"
            sx={(theme) => ({
              fontSize: theme.fontSizes.xl,
            })}
          >
            {project?.name}
          </Button>
        </Group>
      </Box>
    </Header>
  )
}

export default ProjectHeader
