import {
  SpotlightAction,
  SpotlightProvider as MantineSpotlightProvider,
} from "@mantine/spotlight"
import { ReactNode } from "react"

const SpotlightProvider = ({ children }: { children: ReactNode }) => {
  const actions: SpotlightAction[] = [
    {
      title: "Create Workspace",
      onTrigger: () => console.info("creating new workspace..."),
    },
    {
      title: "Create Project",
      onTrigger: () => console.info("creating new project..."),
    },
  ]

  return (
    <MantineSpotlightProvider actions={actions} shortcut="mod + k">
      {children}
    </MantineSpotlightProvider>
  )
}

export default SpotlightProvider
