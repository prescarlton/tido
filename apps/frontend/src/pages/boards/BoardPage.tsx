import { Box } from "@mui/material"

import BoardPageHeader from "@/components/boards/BoardPageHeader"
import useProjectContext from "@/contexts/ProjectContext"

const BoardPage = () => {
  const { project } = useProjectContext()
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <BoardPageHeader boardName="Board Name" />
    </Box>
  )
}

export default BoardPage
