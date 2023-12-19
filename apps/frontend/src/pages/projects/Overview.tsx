import { ActionIcon, Box, Group, Title } from "@mantine/core"
import { IconStar, IconStarFilled } from "@tabler/icons-react"

import BoardCarousel from "@/components/projects/overview/BoardCarousel"
import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import useProjectContext from "@/contexts/ProjectContext"
import useFavoriteProject from "@/hooks/api/projects/useFavoriteProjects"

import styles from "./styles.module.scss"

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
      <Box className={styles.container}>
        <Group justify="space-between" align="center" gap="sm">
          <Title size="h1">{project?.name}</Title>
          <ActionIcon onClick={handleToggleFavorite} variant="subtle">
            {project?.favorited ? <IconStarFilled /> : <IconStar />}
          </ActionIcon>
        </Group>
        <BoardCarousel projectId={projectId} />
      </Box>
    </ProjectTabContent>
  )
}
export default OverviewPage
