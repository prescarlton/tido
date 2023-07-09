import ControlledTextArea from "@/components/fields/ControlledTextArea"
import { Stack, Textarea, Title } from "@mantine/core"
import { useFormContext } from "react-hook-form"

const TaskDescription = () => {
  const { control } = useFormContext()

  return (
    <Stack spacing="xs">
      <Title size="h6">Description</Title>
      <ControlledTextArea
        control={control}
        name="description"
        TextAreaProps={{
          variant: "filled",
          radius: "md",
        }}
      />
    </Stack>
  )
}

export default TaskDescription
