import { Add } from "@mui/icons-material"
import { Button, Card } from "@mui/material"

const CreateBoardCard = () => {
  return (
    <Card
      sx={{
        width: 200,
        height: 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F1F2F4",
        boxShadow: "none",
      }}
    >
      <Button
        startIcon={<Add />}
        variant="text"
        sx={{
          textTransform: "none",
          height: "100%",
          width: "100%",
        }}
      >
        Create New Board
      </Button>
    </Card>
  )
}

export default CreateBoardCard
