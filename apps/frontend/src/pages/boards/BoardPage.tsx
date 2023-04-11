import { Box } from "@mui/material"
import { useParams } from "react-router-dom"

import BoardPageHeader from "@/components/boards/BoardPageHeader"
import useProjectContext from "@/contexts/ProjectContext"
import useGetBoard from "@/hooks/api/boards/useGetBoard"
import BoardPageContent from "@/pages/boards/BoardPageContent"

const BoardPage = () => {
  const { project } = useProjectContext()
  const { projectId, boardId } = useParams()

  const { data } = useGetBoard({
    id: boardId as string,
    projectId: projectId as string,
  })

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
      <BoardPageHeader boardName={data?.name} />
      <BoardPageContent />
    </Box>
  )
}

export default BoardPage
