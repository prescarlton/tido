import { Button, Tooltip } from "@mantine/core"
import { IconUserCircle } from "@tabler/icons-react"

const BoardViewOnlyMe = () => {
  return (
    <Tooltip label="Only show tasks assigned to me" withArrow>
      <Button color="gray" variant="subtle" rightSection={<IconUserCircle />}>
        Only Me
      </Button>
    </Tooltip>
  )
}
export default BoardViewOnlyMe
