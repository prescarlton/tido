import { StarOutline } from "@mui/icons-material"
import { IconButton, Stack } from "@mui/material"

const ProjectQuickOptions = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton>
        <StarOutline />
      </IconButton>
    </Stack>
  )
}
export default ProjectQuickOptions
