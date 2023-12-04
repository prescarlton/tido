import {
  ActionIcon,
  Button,
  Group,
  Popover,
  Select,
  Tooltip,
} from "@mantine/core"
import { IconArrowsSort, IconChevronDown } from "@tabler/icons-react"

import useBoardContext from "@/contexts/BoardContext"

const BoardViewSort = () => {
  const { sortDir, sortColumn, setSortColumn, setSortDir } = useBoardContext()

  return (
    <Popover>
      <Popover.Target>
        <Tooltip label="Sort" withArrow>
          {/*
          <ActionIcon>
            <IconArrowsSort />
          </ActionIcon>
          */}
          <Button
            color="gray"
            px="xs"
            variant="subtle"
            rightIcon={<IconChevronDown />}
          >
            Sort
          </Button>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown styles={{ zIndex: 100000000 }}>
        <Group>
          <Select
            label="Sort By"
            value={sortColumn}
            onChange={(val) => setSortColumn(val || "updated")}
            data={[
              { value: "updated", label: "Updated" },
              { value: "created", label: "Created" },
              { value: "name", label: "Name" },
            ]}
            sx={{ flex: 1 }}
          />
          <Select
            label="Sort Direction"
            value={sortDir}
            onChange={(val) => setSortDir((val as "asc") || "asc")}
            data={[
              { value: "asc", label: "Ascending" },
              { value: "desc", label: "Descending" },
            ]}
          />
        </Group>
      </Popover.Dropdown>
    </Popover>
  )
}
export default BoardViewSort
