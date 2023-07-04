import { Button, Menu } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import { BoardView } from "shared/types/boards"
import {
  ChevronDown,
  LayoutKanban,
  LayoutList,
  Table,
} from "tabler-icons-react"

interface IBoardViewSwitcher {
  tab: BoardView
  setTab: Dispatch<SetStateAction<BoardView>>
}

const BoardViewSwitcher = ({ tab, setTab }: IBoardViewSwitcher) => {
  const iconMap = {
    [BoardView.List]: <Table size={14} />,
    [BoardView.Table]: <Table size={14} />,
    [BoardView.Group]: <LayoutList size={14} />,
    [BoardView.Kanban]: <LayoutKanban size={14} />,
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
          rightIcon={<ChevronDown />}
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
