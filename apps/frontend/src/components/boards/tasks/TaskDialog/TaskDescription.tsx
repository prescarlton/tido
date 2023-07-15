import { Flex, Kbd, Stack, Text, Title } from "@mantine/core"
import { getHotkeyHandler } from "@mantine/hooks"
import { useFormContext } from "react-hook-form"

import ControlledTextArea from "@/components/fields/ControlledTextArea"

interface ITaskDescription {
  onSubmit: (data: any) => void
}

const TaskDescription = ({ onSubmit }: ITaskDescription) => {
  const { control, handleSubmit } = useFormContext()

  return (
    <Stack spacing="xs" sx={{ position: "relative" }}>
      <Title size="h6">Description</Title>
      <ControlledTextArea
        control={control}
        name="description"
        TextAreaProps={{
          variant: "filled",
          radius: "md",
          minRows: 6,
          maxRows: 6,
          onKeyDown: getHotkeyHandler([
            ["mod+Enter", () => handleSubmit(onSubmit)()],
          ]),
        }}
        tooltip={
          <Flex gap="xs">
            <Kbd>ctrl</Kbd>
            <Kbd>Enter</Kbd>
            <Text sx={{ display: "flex", alignItems: "center" }}>to save</Text>
          </Flex>
        }
      />
    </Stack>
  )
}

export default TaskDescription
