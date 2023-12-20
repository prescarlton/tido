import {
  Box,
  Group,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import { IconSearch } from "@tabler/icons-react"
import { ReactNode } from "react"
import { Task } from "shared/types/tasks"

import useBoardContext from "@/contexts/BoardContext"

import BoardViewFilters from "./BoardViewFilters"
import BoardViewOnlyMe from "./BoardViewOnlyMe"
import BoardViewSort from "./BoardViewSort"
import CreateTaskButton from "./CreateTaskButton"
import styles from "./styles.module.scss"
interface IBoardViewLayout {
  tasks: Task[]
  children: ReactNode
}
export interface IBoardView {
  tasks: Task[]
}

const BoardViewLayout = ({ children, tasks }: IBoardViewLayout) => {
  const { taskSearchValue, setTaskSearchValue } = useBoardContext()
  return (
    <Box className={styles.container}>
      <Group justify="space-between" align="center" p="sm">
        <Group gap="xs">
          <BoardViewFilters />
          <BoardViewSort />
        </Group>
        <Group gap="xs">
          <BoardViewOnlyMe />
          <TextInput
            value={taskSearchValue}
            onChange={(e) => setTaskSearchValue(e.target.value)}
            placeholder="Search for tasks"
            leftSection={<IconSearch />}
          />
          <CreateTaskButton />
        </Group>
      </Group>
      {tasks.length === 0 ? (
        <Title style={{ alignSelf: "center" }} size="h3" mt="sm" c="dimmed">
          No tasks found.
        </Title>
      ) : (
        children
      )}
    </Box>
  )
}

export default BoardViewLayout
