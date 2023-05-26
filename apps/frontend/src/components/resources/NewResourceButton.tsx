import { Button, ListItemText, Menu, MenuItem } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { ChevronDown } from "react-feather"

const NewResourceButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()

  const onClick = ({ currentTarget }: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(currentTarget)
  }

  const onClose = () => setAnchorEl(undefined)

  return (
    <>
      <Button endIcon={<ChevronDown />} variant="contained" onClick={onClick}>
        New Resource
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem>
          <ListItemText>New note</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>New key/value</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>New link</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>New GDrive resource</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

export default NewResourceButton
