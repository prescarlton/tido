import useCreateProject from "@/hooks/api/projects/useCreateProject"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material"
import { ChangeEvent, useState } from "react"

const CreateProjectDialog = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const [projectName, setProjectName] = useState("")
  const createMutation = useCreateProject()

  const onClick = async () => {
    await createMutation.mutateAsync({ name: projectName })
    onClose()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value)
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Project</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          value={projectName}
          onChange={handleChange}
          fullWidth
          placeholder="Project Name"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClick} variant="contained" color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default CreateProjectDialog
