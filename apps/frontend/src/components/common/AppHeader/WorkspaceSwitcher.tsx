import { Box, Select, Skeleton } from "@mantine/core"

import useListMyWorkspaces from "@/hooks/api/workspaces/useListMyWorkspaces"

const WorkspaceSwitcher = () => {
  const { data: workspaces } = useListMyWorkspaces()
  if (!workspaces) return <Skeleton />

  // TODO: make this jawn do somethin
  // TODO: make types

  // make the list into a prettier list for selectability
  const options = workspaces.map((workspace) => ({
    value: workspace.id,
    label: workspace.name,
  }))
  return (
    <Box>
      <Select
        data={options}
        defaultValue={options[0].value}
        variant="unstyled"
      />
    </Box>
  )
}
export default WorkspaceSwitcher
