import { Select, Skeleton } from "@mantine/core"

import useAppContext from "@/contexts/AppContext"
import useListMyWorkspaces from "@/hooks/api/workspaces/useListMyWorkspaces"
import useSetActiveWorkspace from "@/hooks/api/workspaces/useSetActiveWorkspace"

const WorkspaceSwitcher = () => {
  const { data: workspaces } = useListMyWorkspaces()
  const { activeWorkspaceId } = useAppContext()
  const setActiveWorkspace = useSetActiveWorkspace()

  if (!workspaces) return <Skeleton height={32} width={180} />

  const onChange = async (value: string | null) => {
    if (value) await setActiveWorkspace.mutateAsync({ workspaceId: value })
  }

  // make the list into a prettier list for selectability
  const options = workspaces.map((workspace) => ({
    value: workspace.id,
    label: workspace.name,
  }))

  return (
    <Select
      data={options}
      value={activeWorkspaceId}
      variant="unstyled"
      style={{ width: 180 }}
      onChange={onChange}
      allowDeselect={false}
    />
  )
}
export default WorkspaceSwitcher
