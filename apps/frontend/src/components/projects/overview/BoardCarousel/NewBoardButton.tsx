import { zodResolver } from "@hookform/resolvers/zod"
import {
  Box,
  Button,
  Card,
  Popover,
  Title,
  UnstyledButton,
} from "@mantine/core"
import { FormProvider, useForm } from "react-hook-form"
import { CreateBoardBody, CreateBoardSchema } from "shared/types/boards"

import ControlledColorPicker from "@/components/fields/ControlledColorPicker"
import ControlledTextField from "@/components/fields/ControlledTextField"
import useCreateBoard from "@/hooks/api/boards/useCreateBoard"

import styles from "./styles.module.scss"

const NewBoardButton = () => {
  const createMutation = useCreateBoard()

  const formMethods = useForm({
    defaultValues: { name: "", color: "" },
    resolver: zodResolver(CreateBoardSchema.body),
  })
  const { control, handleSubmit } = formMethods

  const onSubmit = async (data: CreateBoardBody) => {
    await createMutation.mutateAsync(data)
  }

  return (
    <Popover width={300} position="bottom-start">
      <Popover.Target>
        <Card className={styles.newBoardButton} withBorder p={0}>
          <UnstyledButton p="sm" style={{ flex: 1 }}>
            <Title size="h5" style={{ fontWeight: "bold" }}>
              Create new Board
            </Title>
          </UnstyledButton>
        </Card>
      </Popover.Target>
      <Popover.Dropdown>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>Create Board</Box>
          <Box>
            <ControlledTextField
              control={control}
              name="name"
              label="Board Name"
            />
          </Box>
          <Box>
            <FormProvider {...formMethods}>
              <ControlledColorPicker
                name="color"
                control={control}
                label="Board Color"
              />
            </FormProvider>
          </Box>
          <Box>
            <Button type="submit">Create</Button>
          </Box>
        </form>
      </Popover.Dropdown>
    </Popover>
  )
}

export default NewBoardButton
