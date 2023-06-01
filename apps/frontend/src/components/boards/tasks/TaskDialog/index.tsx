import { Close } from "@mui/icons-material"
import {
  Box,
  Dialog,
  DialogTitle,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import { Activity, AlignLeft } from "react-feather"

import TaskActivity from "@/components/boards/tasks/TaskDialog/TaskActivity"
import TaskDescription from "@/components/boards/tasks/TaskDialog/TaskDescription"
import TaskMembers from "@/components/boards/tasks/TaskDialog/TaskMembers"
import TaskTags from "@/components/boards/tasks/TaskDialog/TaskTags"

interface ITaskDialog {
  taskId: string
  open: boolean
  onClose: () => void
}

const TaskDialog = ({ taskId, open, onClose }: ITaskDialog) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          p: 2,
          display: "flex",
          gap: 2,
          minHeight: 400,
          backgroundColor: "background.default",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="h3">task name</Typography>
          <Typography variant="subtitle2">In Board name</Typography>
        </Stack>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Stack sx={{ flex: 3 }} spacing={3}>
          <TaskDescription />
          <TaskActivity />
        </Stack>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <TaskMembers />
          <TaskTags />
        </Box>
      </Box>
    </Dialog>
  )
}

export default TaskDialog
