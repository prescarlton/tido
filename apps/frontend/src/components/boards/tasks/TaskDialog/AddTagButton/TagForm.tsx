import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, Flex, Group, Stack } from "@mantine/core"
import { ButtonGroup } from "@mantine/core/lib/Button/ButtonGroup/ButtonGroup"
import { useForm } from "react-hook-form"
import { CreateTagSchema } from "shared/types/boards"
import { TaskTag } from "shared/types/tasks"

import ControlledColorPicker from "@/components/fields/ControlledColorPicker"
import ControlledTextField from "@/components/fields/ControlledTextField"
import useCreateTag from "@/hooks/api/boards/useCreateTag"
import useDeleteTag from "@/hooks/api/boards/useDeleteTag"
import useUpdateTag from "@/hooks/api/boards/useUpdateTag"

interface IEditTags {
  switchStep: () => void
  tag?: TaskTag
}

const TagForm = ({ switchStep, tag }: IEditTags) => {
  const { control, trigger, getValues } = useForm({
    defaultValues: {
      name: tag?.name || "",
      color: tag?.color || "",
    },
    resolver: zodResolver(CreateTagSchema.body),
  })
  const createMutation = useCreateTag()

  const updateMutation = useUpdateTag({
    tagId: tag?.id || "",
  })
  const deleteMutation = useDeleteTag({ tagId: tag?.id || "" })

  // we have to get a little goofy since we're
  // already inside of a form here; can't nest forms
  const onClickCreate = async () => {
    const mutation = tag ? updateMutation : createMutation
    const valid = await trigger()
    if (!valid) return
    await mutation.mutateAsync(getValues())
    switchStep()
  }

  const onDeleteClick = async () => {
    await deleteMutation.mutateAsync()
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
        <Flex gap="sm">
          {tag && (
            <Button
              variant="subtle"
              onClick={onDeleteClick}
              size="xs"
              sx={{ flex: 1 }}
              color="red"
            >
              Delete Tag
            </Button>
          )}
          <Button
            variant="filled"
            onClick={onClickCreate}
            size="xs"
            sx={{ flex: 1 }}
          >
            {tag ? "Update Tag" : "Create Tag"}
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}

export default TagForm
