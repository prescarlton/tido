import { Box, Stack } from "@mui/material"
import { useParams, useSearchParams } from "react-router-dom"

import BoardPageHeader from "@/components/boards/BoardPageHeader"
import ListContainer from "@/components/lists/ListContainer"
import ListContainer2 from "@/components/lists/ListContainer2"
import NewListButton from "@/components/lists/NewListButton"
import useGetBoard from "@/hooks/api/boards/useGetBoard"

const BoardPage = () => {
  const { boardId, projectId } = useParams()
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
      <BoardPageHeader boardName={data?.name || "Loading..."} />
      <Box
        sx={{
          px: 4,
          pb: 2,
          overflowY: "hidden",
          overflowX: "auto",
          height: "100%",
          whiteSpace: "nowrap",
          display: "flex",
          overflow: "auto",
          alignItems: "flex-start",
          flex: 1,
        }}
      >
        <ListContainer />
        <ListContainer />
        <ListContainer />
        <ListContainer />
        <ListContainer />
        <ListContainer />
        <NewListButton />
      </Box>
    </Box>
  )
}

export default BoardPage
