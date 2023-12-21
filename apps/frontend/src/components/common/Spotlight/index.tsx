import { Spotlight, SpotlightActionData } from "@mantine/spotlight"

interface IAppSpotlight {
  actions: SpotlightActionData[]
}

const AppSpotlight = ({ actions }: IAppSpotlight) => {
  return <Spotlight actions={actions} />
}
export default AppSpotlight
