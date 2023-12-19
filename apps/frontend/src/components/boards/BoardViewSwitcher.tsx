import { Button, getThemeColor, Menu, useMantineTheme } from "@mantine/core"
import {
  IconChevronDown,
  IconLayoutKanban,
  IconLayoutList,
  IconTable,
} from "@tabler/icons-react"
import { Dispatch, SetStateAction } from "react"
import { BoardView } from "shared/types/boards"

interface IBoardViewSwitcher {
  tab: BoardView
  setTab: Dispatch<SetStateAction<BoardView>>
}

const BoardViewSwitcher = ({ tab, setTab }: IBoardViewSwitcher) => {
  const iconMap = {
    [BoardView.List]: <IconTable size={14} />,
    [BoardView.Table]: <IconTable size={14} />,
    [BoardView.Group]: <IconLayoutList size={14} />,
    [BoardView.Kanban]: <IconLayoutKanban size={14} />,
  }

  const labelMap = {
    [BoardView.List]: "List View",
    [BoardView.Table]: "Table View",
    [BoardView.Group]: "Group View",
    [BoardView.Kanban]: "Kanban View",
  }
  const theme = useMantineTheme()
  return (
    <Menu withArrow position="bottom-end">
      <Menu.Target>
        <Button
          leftSection={iconMap[tab]}
          rightSection={<IconChevronDown />}
          variant="subtle"
          color="gray"
        >
          {labelMap[tab]}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {Object.keys(labelMap).map((view) => (
          <Menu.Item
            key={view}
            leftSection={iconMap[view as BoardView]}
            onClick={() => setTab(view as BoardView)}
            color={tab === view ? getThemeColor("primary", theme) : ""}
          >
            {labelMap[view as BoardView]}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}

export default BoardViewSwitcher
