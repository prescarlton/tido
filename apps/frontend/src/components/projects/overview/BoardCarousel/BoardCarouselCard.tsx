import {
  Card,
  getThemeColor,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { BoardList } from "shared/types/boards"

import styles from "./styles.module.scss"
interface IBoardCarouselCard {
  board: BoardList
}

const BoardCarouselCard = ({
  board: { name, tasks, id, color },
}: IBoardCarouselCard) => {
  const navigate = useNavigate()
  const theme = useMantineTheme()

  const onClick = () => navigate(`b/${id}`)
  const backgroundColor = getThemeColor(color, theme)
  return (
    <Card className={styles.boardCard} withBorder>
      <UnstyledButton
        className={styles.boardCardButton}
        onClick={onClick}
        style={{
          backgroundColor,
        }}
      >
        <Title size="h5" style={{ fontWeight: "bold" }}>
          {name}
        </Title>
        <Text size="xs">{tasks?.length} tasks</Text>
      </UnstyledButton>
    </Card>
  )
}

export default BoardCarouselCard
