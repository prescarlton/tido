import { Project } from '@/types/Project'
import { createContext, ReactNode, useContext } from 'react'
import { useParams } from 'react-router-dom'

type ProjectContextType = {
  project: Project | null
}

const ProjectContext = createContext<ProjectContextType>({
  project: null,
})

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { projectId } = useParams()
  console.log(projectId)

  const project = {
    id: projectId || '',
    name: 'Sample Project',
    description: 'Project Description',
    owner: {
      id: '1',
      name: 'John Doe',
    },
  }

  return (
    <ProjectContext.Provider value={{ project }}>
      {children}
    </ProjectContext.Provider>
  )
}

const useProjectContext = () => {
  return useContext(ProjectContext)
}

export default useProjectContext
