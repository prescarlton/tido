import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, Stack } from "@mantine/core"
import { useForm } from "react-hook-form"
import { CreateTagSchema } from "shared/types/boards"

import ControlledColorPicker from "@/components/fields/ControlledColorPicker"
import ControlledTextField from "@/components/fields/ControlledTextField"
import useCreateTag from "@/hooks/api/boards/useCreateTag"

interface IEditTags {
  switchStep: () => void
}

const CreateTag = ({ switchStep }: IEditTags) => {
  const { control, trigger, getValues } = useForm({
    defaultValues: {
      name: "",
      color: "",
    },
    resolver: zodResolver(CreateTagSchema.body),
  })
  const createMutation = useCreateTag()

  // we have to get a little goofy since we're
  // already inside of a form here; can't nest forms
  const onClickCreate = async () => {
    const valid = await trigger()
    if (!valid) return
    await createMutation.mutateAsync(getValues())
    switchStep()
  }

  return (
    <Box>
      <Stack spacing="xs">
        <ControlledTextField
          control={control}
          name="name"
          label="Name"
          TextInputProps={{
            autoComplete: "off",
          }}
        />
        <ControlledColorPicker control={control} name="color" label="Color" />
        <Button variant="outline" onClick={onClickCreate} size="xs">
          Create Tag
        </Button>
      </Stack>
    </Box>
  )
}

export default CreateTag
