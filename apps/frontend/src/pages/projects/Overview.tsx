import { ActionIcon, Box, Group, Title } from "@mantine/core"
import { IconStar, IconStarFilled } from "@tabler/icons-react"

import BoardCarousel from "@/components/projects/overview/BoardCarousel"
import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import useProjectContext from "@/contexts/ProjectContext"
import useFavoriteProject from "@/hooks/api/projects/useFavoriteProjects"

const OverviewPage = () => {
  const { projectId, project } = useProjectContext()

  const favoriteMutation = useFavoriteProject()

  const handleToggleFavorite = async () => {
    await favoriteMutation.mutateAsync({
      projectId,
      favorite: !project?.favorited,
    })
  }

  return (
    <ProjectTabContent>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: theme.spacing.md,
          paddingTop: theme.spacing.sm,
        })}
      >
        <Group position="apart" align="center">
          <Group spacing="sm" align="center">
            <Title size="h1">{project?.name}</Title>
            {/*
            <Title size="h3" c="dimmed">
              Overview
            </Title>
            */}
          </Group>
          <Group spacing="sm">
            <ActionIcon onClick={handleToggleFavorite}>
              {project?.favorited ? <IconStarFilled /> : <IconStar />}
            </ActionIcon>
          </Group>
        </Group>
        <BoardCarousel projectId={projectId} />
        {/* <Button onClick={handleClickResources} variant="contained">
          Resources
        </Button>
        <Button onClick={handleClickAnnouncements} variant="contained">
          Announcements
        </Button>
        <Button onClick={handleClickStandup} variant="contained">
          Standup
        </Button> */}
      </Box>
    </ProjectTabContent>
  )
}
export default OverviewPage
