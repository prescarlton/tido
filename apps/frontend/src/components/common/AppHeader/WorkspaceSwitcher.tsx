import { Select, Skeleton } from "@mantine/core"

import useGetActiveWorkspace from "@/hooks/api/workspaces/useGetActiveWorkspace"
import useListMyWorkspaces from "@/hooks/api/workspaces/useListMyWorkspaces"
import useSetActiveWorkspace from "@/hooks/api/workspaces/useSetActiveWorkspace"

const WorkspaceSwitcher = () => {
  const { data: workspaces } = useListMyWorkspaces()
  const { data: activeWorkspace, refetch } = useGetActiveWorkspace()
  const setActiveWorkspace = useSetActiveWorkspace()

  if (!workspaces || !activeWorkspace)
    return <Skeleton height={32} width={180} />

  const onChange = async (value: string | null) => {
    if (value)
      await setActiveWorkspace
        .mutateAsync({ workspaceId: value })
        .then(() => refetch())
  }

  // make the list into a prettier list for selectability
  const options = workspaces.map((workspace) => ({
    value: workspace.id,
    label: workspace.name,
  }))

  return (
    <Select
      data={options}
      value={activeWorkspace.id}
      variant="unstyled"
      style={{ width: 180 }}
      onChange={onChange}
    />
  )
}
export default WorkspaceSwitcher
