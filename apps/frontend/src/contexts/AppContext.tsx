import { createContext } from "react"
import { Project } from "shared/types/projects"

interface IAppContext {
  project?: Project
  projectId?: string
}
const AppContext = createContext<IAppContext>({} as IAppContext)
