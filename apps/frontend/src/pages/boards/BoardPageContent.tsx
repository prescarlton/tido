import { Box, Tab, Tabs } from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { BoardView } from "shared/types/boards"

const BoardPageContent = () => {
  const [tab, setTab] = useState<BoardView>(BoardView.Table)

  const handleChangeTab = (_e: SyntheticEvent, newVal: BoardView) => {
    setTab(newVal)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Tabs
        value={tab}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          px: 6,
        }}
        onChange={handleChangeTab}
      >
        <Tab label="Table View" value={BoardView.Table} />
        <Tab label="List View" value={BoardView.List} />
        <Tab label="Board View" value={BoardView.Kanban} />
      </Tabs>
    </Box>
  )
}

export default BoardPageContent
