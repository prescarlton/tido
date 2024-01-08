import { ActionIcon, Box, Group, Title } from "@mantine/core"
import { IconStar, IconStarFilled } from "@tabler/icons-react"
import { Navigate } from "react-router-dom"

import BoardCarousel from "@/components/projects/overview/BoardCarousel"
import MembersCard from "@/components/projects/overview/MembersCard"
import ProjectActivityCard from "@/components/projects/overview/ProjectActivityCard"
import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import useAppContext from "@/contexts/AppContext"
import useFavoriteProject from "@/hooks/api/projects/useFavoriteProjects"

import styles from "./styles.module.scss"

const OverviewPage = () => {
  const { projectId, project } = useAppContext()

  const favoriteMutation = useFavoriteProject()

  // this should never happen, but just incase it does, we're covered 😉
  if (!projectId) {
    return <Navigate to="/" />
  }

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
        <Box className={styles.innerContainer}>
          <BoardCarousel projectId={projectId} />
          <Box className={styles.sidebar}>
            <ProjectActivityCard />
            <MembersCard />
          </Box>
        </Box>
      </Box>
    </ProjectTabContent>
  )
}
export default OverviewPage
