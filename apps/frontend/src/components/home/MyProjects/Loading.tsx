import { Box, Grow, Skeleton, Stack, Typography } from "@mui/material"
import { range } from "lodash"

const MyProjectsLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.25,
      }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h2">My Projects</Typography>
        <Typography variant="h4">(0/5)</Typography>
      </Stack>
      <Stack direction="row" spacing={1.5}>
        {range(0, 5).map((i) => (
          <Grow key={i} in>
            <Skeleton variant="rectangular" width={350} height={125} />
          </Grow>
        ))}
      </Stack>
    </Box>
  )
}

export default MyProjectsLoading
