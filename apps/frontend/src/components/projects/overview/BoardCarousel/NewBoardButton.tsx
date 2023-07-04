import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Card, Menu, Title, UnstyledButton } from "@mantine/core"
import { FormProvider, useForm } from "react-hook-form"
import { CreateBoardBody, CreateBoardSchema } from "shared/types/boards"

import ControlledColorPicker from "@/components/fields/ControlledColorPicker"
import ControlledTextField from "@/components/fields/ControlledTextField"
import useCreateBoard from "@/hooks/api/boards/useCreateBoard"

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
    <Menu
      styles={{
        item: {
          "&[data-hovered]": {
            backgroundColor: "transparent",
            cursor: "default",
          },
        },
      }}
      closeOnItemClick={false}
      width={300}
    >
      <Menu.Target>
        <Card
          sx={(theme) => ({
            width: 200,
            height: 85,
            position: "relative",
            transition: ".2s all ease-in-out",
            "&:hover": {
              boxShadow: theme.shadows.sm,
            },
            display: "flex",
            flexDirection: "column",
          })}
          withBorder
          p={0}
        >
          <UnstyledButton p="sm" sx={{ flex: 1, display: "flex" }}>
            <Title size="h5" sx={{ fontWeight: "bold" }}>
              Create new Board
            </Title>
          </UnstyledButton>
        </Card>
      </Menu.Target>
      <Menu.Dropdown>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Menu.Item>Create Board</Menu.Item>
          <Menu.Item>
            <ControlledTextField
              control={control}
              name="name"
              label="Board Name"
            />
          </Menu.Item>
          <Menu.Item>
            <FormProvider {...formMethods}>
              <ControlledColorPicker
                name="color"
                control={control}
                label="Board Color"
              />
            </FormProvider>
          </Menu.Item>
          <Menu.Item>
            <Button type="submit">Create</Button>
          </Menu.Item>
        </form>
      </Menu.Dropdown>
    </Menu>
  )
}

export default NewBoardButton
