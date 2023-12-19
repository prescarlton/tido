import { Group, UnstyledButton } from "@mantine/core"

import FavoritesMenu from "./FavoritesMenu"

const HeaderLinks = () => {
  return (
    <Group gap="md">
      <UnstyledButton>Workspaces</UnstyledButton>
      <UnstyledButton>Projects</UnstyledButton>
      <FavoritesMenu />
    </Group>
  )
}

export default HeaderLinks
