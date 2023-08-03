import { Flex, Kbd, Stack, Text, Title } from "@mantine/core"
import { getHotkeyHandler } from "@mantine/hooks"
import { useEffect } from "react"
import { useFormContext } from "react-hook-form"

import ControlledRichTextEditor from "@/components/fields/ControlledRichTextEditor"

interface ITaskDescription {
  onSubmit: (data: any) => void
}

const TaskDescription = ({ onSubmit }: ITaskDescription) => {
  const { control, getValues } = useFormContext()

  return (
    <Stack spacing="xs" sx={{ position: "relative" }}>
      <Title size="h6">Description</Title>
      <ControlledRichTextEditor control={control} name="description" />
    </Stack>
  )
}

export default TaskDescription
