import { Chip } from "@mui/material"

const TaskTag = () => {
  const colors = ["primary", "secondary", "warning", "error", "success"]
  const color = colors[Math.floor(Math.random() * 5)]
  return <Chip label="Tag" color={color as "primary"} />
}

export default TaskTag
