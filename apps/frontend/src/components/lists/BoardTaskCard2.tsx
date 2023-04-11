import { Card, CardActionArea, Typography } from "@mui/material"

const BoardTaskCard2 = () => {
  const description =
    Math.random() > 0.5
      ? `Lorem ipsum dolor somethin somethin description wrap please now`
      : ""
  return (
    <Card
      sx={{
        borderRadius: 1.5,
        // boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        // boxShadow:
        //  'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      }}
    >
      <CardActionArea sx={{ width: "100%", height: "100%", py: 1, px: 1.5 }}>
        <Typography variant="h6">Task Name</Typography>
        {description && (
          <Typography variant="caption">{description}</Typography>
        )}
      </CardActionArea>
    </Card>
  )
}

export default BoardTaskCard2
