import { useMantineColorScheme } from "@mantine/core"
import { SpotlightActionData } from "@mantine/spotlight"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { uniqBy } from "lodash"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { useParams } from "react-router-dom"
import { Project } from "shared/types/projects"

import AppSpotlight from "@/components/common/Spotlight"
import useGetProjectById from "@/hooks/api/projects/useGetProject"

interface IAppContext {
  project?: Project
  projectId?: string
  boardId?: string
}
interface IAppProvider {
  children: ReactNode
  actions: SpotlightActionData[]
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppProvider = ({ children, actions }: IAppProvider) => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme()
  const defaultActions: SpotlightActionData[] = [
    {
      id: "dark-mode",
      label: `${colorScheme === "dark" ? "Disable" : "Enable"} Dark Mode`,
      onClick: toggleColorScheme,
      leftSection: colorScheme === "dark" ? <IconSun /> : <IconMoon />,
    },
  ]
  const [spotlightActions, setSpotlightActions] = useState<
    SpotlightActionData[]
  >([...defaultActions, ...actions])
  // const [fullscreen, setFullscreen] = useState(false)
  // const [showProjectHeader, setShowProjectHeader] = useState(true)
  // const [showSideNav, setShowSideNav] = useState(true)

  const { projectId, boardId } = useParams() as {
    projectId?: string
    boardId?: string
  }

  const { data: project } = useGetProjectById({
    projectId: projectId as string,
  })

  useEffect(() => {
    // if we have a valid projectId, lets add some project-based actions
    if (projectId) {
      setSpotlightActions((prev) =>
        uniqBy(
          [
            ...prev,
            {
              id: "create-board",
              label: "Create new Board",
            },
          ],
          (action) => action.id,
        ),
      )
    } else {
      setSpotlightActions((prev) =>
        prev.filter((action) => action.id !== "create-board"),
      )
    }
  }, [projectId])
  useEffect(() => {
    if (boardId) {
      setSpotlightActions((prev) =>
        uniqBy(
          [
            ...prev,
            {
              id: "create-task",
              label: "Create new Task",
            },
          ],
          (action) => action.id,
        ),
      )
    } else {
      setSpotlightActions((prev) =>
        prev.filter((action) => action.id !== "create-task"),
      )
    }
  }, [boardId])

  return (
    <AppContext.Provider
      value={{
        project,
        projectId,
        boardId,
      }}
    >
      {children}
      <AppSpotlight actions={spotlightActions} />
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within AppProvider")
  }
  return context
}

export default useAppContext
