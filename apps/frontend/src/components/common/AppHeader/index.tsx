import { Header, Title, UnstyledButton, useMantineTheme } from "@mantine/core"

import UserMenu from "@/components/common/AppHeader/UserMenu"

const AppHeader = () => {
  const theme = useMantineTheme()
  return (
    <Header
      height={48}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
      })}
    >
      <UnstyledButton>
        <Title size="h3" color={theme.primaryColor}>
          tido
        </Title>
      </UnstyledButton>
      <UserMenu />
    </Header>
  )
}

export default AppHeader
