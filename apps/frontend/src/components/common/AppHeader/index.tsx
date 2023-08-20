import {
  Divider,
  Group,
  Header,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core"
import { useNavigate } from "react-router-dom"

import UserMenu from "@/components/common/AppHeader/UserMenu"

import HeaderLinks from "./HeaderLinks"

const AppHeader = () => {
  const theme = useMantineTheme()

  const navigate = useNavigate()

  const onClickLogo = () => {
    navigate("/")
  }

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
      <Group spacing="sm">
        <UnstyledButton onClick={onClickLogo}>
          <Title size="h3" color={theme.primaryColor}>
            tido
          </Title>
        </UnstyledButton>
        <Divider orientation="vertical" />
        <HeaderLinks />
      </Group>
      <UserMenu />
    </Header>
  )
}

export default AppHeader
