import { ArrowForwardIos } from "@mui/icons-material"
import { Button, Menu, TextField } from "@mui/material"
import { SyntheticEvent, useRef, useState } from "react"
import { Plus } from "react-feather"
import { useParams } from "react-router-dom"

import useCreateTask from "@/hooks/api/tasks/useCreateTask"

const CreateTaskButton = () => {
  const { projectId, boardId } = useParams() as {
    projectId: string
    boardId: string
  }
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  const [taskName, setTaskName] = useState("")
  const inputRef = useRef<HTMLInputElement>()

  const onClick = ({ currentTarget }: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(currentTarget)
  }

  const onCloseMenu = () => {
    setTaskName("")
    setAnchorEl(undefined)
  }

  const createMutation = useCreateTask({ projectId, boardId })

  const onSubmit = async () => {
    await createMutation.mutateAsync({ name: taskName })
    setTaskName("")
  }

  return (
    <>
      <Button variant="contained" startIcon={<Plus />} onClick={onClick}>
        Create Task
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onCloseMenu}
        PaperProps={{ sx: { p: 1 } }}
        MenuListProps={{ sx: { p: 0 } }}
      >
        <TextField
          id="createTaskField"
          inputRef={inputRef}
          value={taskName}
          onChange={({ target }) => setTaskName(target.value)}
          placeholder="Task Name"
          autoComplete="off"
          InputProps={{
            sx: {
              paddingRight: 0,
            },
            endAdornment: (
              <Button
                variant="contained"
                sx={{ minWidth: 0 }}
                onClick={onSubmit}
              >
                <ArrowForwardIos />
              </Button>
            ),
          }}
        />
      </Menu>
    </>
  )
}

export default CreateTaskButton
