import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, Menu, Popover } from "@mantine/core"
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
    <Popover width={300}>
      <Popover.Target>{children}</Popover.Target>
      <Popover.Dropdown>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>Create Project</Box>
          <Box>
            <ControlledTextField
              control={control}
              name="name"
              label="Project Name"
              TextInputProps={{
                autoComplete: "off",
              }}
            />
          </Box>
          <Box>
            <Button type="submit">Create</Button>
          </Box>
        </form>
      </Popover.Dropdown>
    </Popover>
  )
}

export default NewProjectMenu
