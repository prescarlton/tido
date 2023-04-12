import { Box, Stack, Typography } from "@mui/material"

import useProjectContext from "@/contexts/ProjectContext"

const SidebarHeader = () => {
  const { project } = useProjectContext()

  return (
    <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
      <Box
        sx={{
          borderRadius: 2,
          width: 42,
          height: 42,
          backgroundColor: "primary.main",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {project?.name}
        </Typography>
        <Typography variant="h5">Lorem ipsum</Typography>
      </Box>
      {/* <IconButton>
        <UnfoldMore />
      </IconButton> */}
    </Stack>
  )
}

export default SidebarHeader
