import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"

import useCreateBoard from "@/hooks/api/boards/useCreateBoard"

const CreateBoardButton = () => {
  const createMutation = useCreateBoard()

  const onClick = () => {
    createMutation.mutateAsync({
      name: "New Board",
    })
  }

  return (
    <Button
      startIcon={<Add />}
      sx={{
        textTransform: "none",
        ml: 2,
        px: 2,
        justifyContent: "flex-start",
      }}
      variant="text"
      onClick={onClick}
    >
      Add New
    </Button>
  )
}

export default CreateBoardButton
