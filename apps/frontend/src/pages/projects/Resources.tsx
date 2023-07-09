import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import NewResourceButton from "@/components/resources/NewResourceButton"
import NoteCard from "@/components/resources/NoteCard"
import { Box } from "@mantine/core"

const ResourcesPage = () => {
  return (
    <ProjectTabContent
      title="Resources"
      primaryAction={<NewResourceButton />}
      showBack
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          overflowY: "auto",
          height: "100%",
          minHeight: "min-content",
        }}
      >
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </Box>
    </ProjectTabContent>
  )
}

export default ResourcesPage
