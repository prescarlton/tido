import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useParams } from "react-router-dom"

import useCreateBoard from "@/hooks/api/boards/useCreateBoard"

const CreateBoardButton = () => {
  const { projectId } = useParams() as { projectId: string }

  const createMutation = useCreateBoard()

  const onClick = () => {
    console.log(projectId)
    createMutation.mutateAsync({
      name: "New Board",
      projectId,
    })
  }

  return (
    <Button
      startIcon={<Add />}
      sx={{
        textTransform: "none",
      }}
      variant="contained"
      onClick={onClick}
    >
      Create New Board
    </Button>
  )
}

export default CreateBoardButton
