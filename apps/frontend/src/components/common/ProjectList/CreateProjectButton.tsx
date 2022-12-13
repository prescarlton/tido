import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
import CreateProjectDialog from './CreateProjectDialog'

const CreateProjectButton = () => {
  const [open, setOpen] = useState(false)
  const openDialog = () => setOpen(true)
  const closeDialog = () => setOpen(false)

  return (
    <>
      <Button startIcon={<Add />} onClick={openDialog}>
        New Project
      </Button>
      <CreateProjectDialog open={open} onClose={closeDialog} />
    </>
  )
}
export default CreateProjectButton
