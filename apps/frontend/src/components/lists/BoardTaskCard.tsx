import { Card, CardActionArea, Typography } from "@mui/material"

const BoardTaskCard = () => {
  const description =
    Math.random() > 0.5
      ? `Lorem ipsum dolor somethin somethin description wrap please now`
      : ""
  return (
    <Card
      sx={{
        borderRadius: 0.75,
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        minHeight: "min-content",
        height: "auto",
        mb: 1,
      }}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "100%",
          py: 1,
          px: 1.5,
          whiteSpace: "normal",
        }}
      >
        <Typography variant="h5">Task Name</Typography>
        {description && (
          <Typography variant="caption">{description}</Typography>
        )}
      </CardActionArea>
    </Card>
  )
}

export default BoardTaskCard
