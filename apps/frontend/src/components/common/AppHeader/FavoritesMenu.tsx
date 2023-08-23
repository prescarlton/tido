import { Menu, UnstyledButton } from "@mantine/core"

import useGetMyFavorites from "@/hooks/api/favorites/useGetMyFavorites"

const FavoritesMenu = () => {
  const { data: favorites } = useGetMyFavorites()

  return (
    <Menu>
      <Menu.Target>
        <UnstyledButton>Favorites</UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Projects</Menu.Label>
        {/*
          favorites?.projects.map((proj) => (
          <Menu.Item key={proj.id}>{proj.name}</Menu.Item>
        ))
        */}
        <Menu.Divider />
        <Menu.Label>Boards</Menu.Label>
      </Menu.Dropdown>
    </Menu>
  )
}

export default FavoritesMenu
