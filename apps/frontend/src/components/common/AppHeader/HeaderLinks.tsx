import { Group, UnstyledButton } from "@mantine/core"

import FavoritesMenu from "./FavoritesMenu"

const HeaderLinks = () => {
  return (
    <Group gap="md">
      <UnstyledButton>Projects</UnstyledButton>
      <FavoritesMenu />
    </Group>
  )
}

export default HeaderLinks
