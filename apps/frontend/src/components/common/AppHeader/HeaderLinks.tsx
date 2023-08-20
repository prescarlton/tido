import { Group, Header, UnstyledButton } from "@mantine/core"

const HeaderLinks = () => {
  return (
    <Group spacing="md">
      <UnstyledButton>Workspaces</UnstyledButton>
      <UnstyledButton>Projects</UnstyledButton>
      <UnstyledButton>Favorites</UnstyledButton>
    </Group>
  )
}

export default HeaderLinks
