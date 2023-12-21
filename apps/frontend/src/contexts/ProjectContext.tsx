import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { useParams } from "react-router-dom"
import { Project } from "shared/types/projects"

import useGetProjectById from "@/hooks/api/projects/useGetProject"

type ProjectContextType = {
  project?: Project
  projectId: string
  boardId?: string
  fullscreen: boolean
  setFullscreen: Dispatch<SetStateAction<boolean>>
  showProjectHeader: boolean
  setShowProjectHeader: Dispatch<SetStateAction<boolean>>
  showSideNav: boolean
  setShowSideNav: Dispatch<SetStateAction<boolean>>
}

const ProjectContext = createContext<ProjectContextType>(
  {} as ProjectContextType,
)

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [fullscreen, setFullscreen] = useState(false)
  const [showProjectHeader, setShowProjectHeader] = useState(true)
  const [showSideNav, setShowSideNav] = useState(true)

  const { projectId, boardId } = useParams() as {
    projectId: string
    boardId?: string
  }

  const { data: project } = useGetProjectById({ projectId })

  return (
    <ProjectContext.Provider
      value={{
        project,
        projectId,
        boardId,
        fullscreen,
        setFullscreen,
        showProjectHeader,
        setShowProjectHeader,
        showSideNav,
        setShowSideNav,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

const useProjectContext = () => {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error("useProjectContext must be used within a ProjectProvider")
  }
  return context
}

export default useProjectContext
