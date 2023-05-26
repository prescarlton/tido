import { Box } from "@mui/material"

import ProjectTabContent from "@/components/projects/overview/ProjectTabs/TabContent"
import NewResourceButton from "@/components/resources/NewResourceButton"
import NoteCard from "@/components/resources/NoteCard"

const ResourcesPage = () => {
  return (
    <ProjectTabContent title="Resources" primaryAction={<NewResourceButton />}>
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
