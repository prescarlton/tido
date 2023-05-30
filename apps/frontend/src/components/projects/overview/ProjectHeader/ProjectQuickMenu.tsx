import { Menu, MenuItem } from "@mui/material"

interface IProjectQuickMenu {
  anchorEl?: HTMLElement
  onClose: () => void
}

const ProjectQuickMenu = ({ anchorEl, onClose }: IProjectQuickMenu) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      <MenuItem>bofa</MenuItem>
    </Menu>
  )
}

export default ProjectQuickMenu
