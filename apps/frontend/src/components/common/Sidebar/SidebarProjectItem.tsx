import { UnstyledButton } from "@mantine/core"
import { useLocation, useNavigate } from "react-router-dom"
import { Project } from "shared/types/projects"

import styles from "./sidebar.module.scss"

interface ISidebarProjectItem {
  project: Project
}

const SidebarProjectItem = ({ project }: ISidebarProjectItem) => {
  const location = useLocation()
  const active = location.pathname.includes(project.id) || undefined
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/p/${project.id}`)
  }

  return (
    <UnstyledButton
      onClick={handleClick}
      className={styles.sidebarProjectItem}
      data-active={active}
    >
      {project.name}
    </UnstyledButton>
  )
}

export default SidebarProjectItem
