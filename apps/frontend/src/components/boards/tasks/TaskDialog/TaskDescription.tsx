import { Stack } from "@mantine/core"
import { useFormContext } from "react-hook-form"

import ControlledRichTextEditor from "@/components/fields/ControlledRichTextEditor"

const TaskDescription = () => {
  const { control } = useFormContext()

  return (
    <Stack gap="xs" style={{ position: "relative" }}>
      {/* <Title size="h6">Description</Title>*/}
      <ControlledRichTextEditor control={control} name="rawDescription" />
    </Stack>
  )
}

export default TaskDescription
