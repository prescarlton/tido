import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Menu } from "@mantine/core"
import { ReactNode } from "react"
import { useForm } from "react-hook-form"
import { CreateProjectBody, CreateProjectSchema } from "shared/types/projects"

import useCreateProject from "@/hooks/api/projects/useCreateProject"

import ControlledTextField from "../fields/ControlledTextField"

interface INewProjectMenu {
  children: ReactNode
}

const NewProjectMenu = ({ children }: INewProjectMenu) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { name: "" },
    resolver: zodResolver(CreateProjectSchema.body),
  })
  const createMutation = useCreateProject()

  const onSubmit = async (data: CreateProjectBody) => {
    await createMutation.mutateAsync(data)
    reset()
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
      <Menu.Target>{children}</Menu.Target>
      <Menu.Dropdown>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Menu.Item>Create Project</Menu.Item>
          <Menu.Item>
            <ControlledTextField
              control={control}
              name="name"
              label="Project Name"
              TextInputProps={{
                autoComplete: "off",
              }}
            />
          </Menu.Item>
          <Menu.Item>
            <Button type="submit">Create</Button>
          </Menu.Item>
        </form>
      </Menu.Dropdown>
    </Menu>
  )
}

export default NewProjectMenu
