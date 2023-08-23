import { Button, Menu } from "@mantine/core"
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

  return (
    <Menu withArrow position="bottom-end">
      <Menu.Target>
        <Button
          leftIcon={iconMap[tab]}
          rightIcon={<IconChevronDown />}
          variant="subtle"
        >
          {labelMap[tab]}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {Object.keys(labelMap).map((view) => (
          <Menu.Item
            key={view}
            icon={iconMap[view as BoardView]}
            onClick={() => setTab(view as BoardView)}
          >
            {labelMap[view as BoardView]}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}

export default BoardViewSwitcher
