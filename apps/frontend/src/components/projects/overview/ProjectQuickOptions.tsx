import useProjectContext from '@/contexts/ProjectContext'
import { Close, MoreVert, StarOutline } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'

const ProjectQuickOptions = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton>
        <StarOutline />
      </IconButton>
      <IconButton>
        <MoreVert />
      </IconButton>
    </Stack>
  )
}
export default ProjectQuickOptions
