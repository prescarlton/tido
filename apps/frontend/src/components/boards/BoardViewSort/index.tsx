import { Button, Group, Popover, Select, Tooltip } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"

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
            rightSection={<IconChevronDown />}
          >
            Sort
          </Button>
        </Tooltip>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <Select
            label="Sort By"
            value={sortColumn}
            onChange={(val) => setSortColumn(val || "status")}
            data={[
              { value: "status", label: "Status" },
              { value: "updated", label: "Updated" },
              { value: "created", label: "Created" },
              { value: "name", label: "Name" },
            ]}
            style={{ flex: 1 }}
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
