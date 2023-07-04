import { Header, Title, UnstyledButton } from "@mantine/core"

import UserMenu from "@/components/common/AppHeader/UserMenu"

const AppHeader = () => {
  return (
    <Header
      height={48}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: theme.fn.variant({
          variant: "filled",
          color: theme.primaryColor,
        }).background,
      })}
    >
      <UnstyledButton>
        <Title size="h3" color="white">
          tido
        </Title>
      </UnstyledButton>
      <UserMenu />
    </Header>
  )
}

export default AppHeader
