import { AppShell, Divider, Group, Title, UnstyledButton } from "@mantine/core"
import { useNavigate } from "react-router-dom"

import UserMenu from "@/components/common/AppHeader/UserMenu"

import HeaderLinks from "./HeaderLinks"
import styles from "./styles.module.scss"

const AppHeader = () => {
  const navigate = useNavigate()

  const onClickLogo = () => {
    navigate("/")
  }

  return (
    <AppShell.Header className={styles.container}>
      <Group gap="sm">
        <UnstyledButton onClick={onClickLogo}>
          <Title size="h3" className={styles.logo}>
            tido
          </Title>
        </UnstyledButton>
        <Divider orientation="vertical" />
        <HeaderLinks />
      </Group>
      <UserMenu />
    </AppShell.Header>
  )
}

export default AppHeader
