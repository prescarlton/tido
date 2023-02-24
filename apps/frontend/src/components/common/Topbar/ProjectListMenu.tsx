import { Add } from '@mui/icons-material'
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import useListProjects from '@/hooks/api/projects/useListProjects'

const ProjectListMenu = ({
  anchorEl,
  onClose,
}: {
  anchorEl: HTMLElement | null
  onClose: () => void
}) => {
  const navigate = useNavigate()
  const { data: projectList, isLoading } = useListProjects()
  const handleProjectClick = (pId: string) => {
    navigate(`/p/${pId}`)
    onClose()
  }
  return (
    <Menu open={Boolean(anchorEl)} onClose={onClose} anchorEl={anchorEl}>
      <MenuList>
        {projectList?.map((project) => (
          <MenuItem
            onClick={() => handleProjectClick(project.id)}
            key={project.id}
          >
            {project.name}
          </MenuItem>
        ))}
        <Divider />
        <MenuItem onClick={onClose}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText>Create new project</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProjectListMenu
