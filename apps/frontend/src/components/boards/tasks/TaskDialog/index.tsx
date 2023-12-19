import { zodResolver } from "@hookform/resolvers/zod"
import { Box, Button, Flex, Group, Modal, Stack, Title } from "@mantine/core"
import { FocusEvent, useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import {
  CreateTaskBody,
  Task,
  UpdateTaskBody,
  UpdateTaskRequestSchema,
} from "shared/types/tasks"

import TaskCreator from "@/components/boards/tasks/TaskDialog/TaskCreator"
import TaskMembers from "@/components/boards/tasks/TaskDialog/TaskMembers"
import TaskStatus from "@/components/boards/tasks/TaskDialog/TaskStatus"
import TaskTags from "@/components/boards/tasks/TaskDialog/TaskTags"
import ControlledTextField from "@/components/fields/ControlledTextField"
import useProjectContext from "@/contexts/ProjectContext"
import useGetMe from "@/hooks/api/auth/useGetMe"
import useCreateTask from "@/hooks/api/tasks/useCreateTask"
import useGetTaskById from "@/hooks/api/tasks/useGetTaskById"
import useUpdateTask from "@/hooks/api/tasks/useUpdateTask"

import AdditionalTaskTabs from "./AdditionalTaskTabs"

interface ITaskDialog {
  task?: Task
  opened: boolean
  statusId?: number
  onClose: () => void
}

const TaskDialog = ({ task, opened, onClose, statusId }: ITaskDialog) => {
  const { projectId, boardId } = useProjectContext()
  const formMethods = useForm<UpdateTaskBody>({
    defaultValues: {
      name: task?.name || "",
      rawDescription: "",
      status: task?.status.id.toString() || statusId || "",
    },
    resolver: zodResolver(UpdateTaskRequestSchema.body),
  })
  const { handleSubmit, reset, control } = formMethods

  const { data: taskDetails } = useGetTaskById({
    taskId: task?.id,
    projectId,
    boardId: boardId as string,
  })
  const updateMutation = useUpdateTask({
    taskId: task?.id,
    projectId,
    boardId: boardId as string,
  })
  const createMutation = useCreateTask({
    projectId,
    boardId: boardId as string,
  })
  const { data: me } = useGetMe()

  const onSubmit = async (data: UpdateTaskBody | CreateTaskBody) => {
    task
      ? await updateMutation.mutateAsync(data)
      : await createMutation.mutateAsync(data as CreateTaskBody)
    onClose()
  }
  const handleUpdateTitle = async (e: FocusEvent<HTMLHeadingElement>) => {
    if (e.target.innerHTML)
      await updateMutation.mutateAsync({ name: e.target.innerHTML })
  }

  useEffect(() => {
    if (taskDetails)
      reset({
        name: taskDetails.name,
        rawDescription: taskDetails.rawDescription || "",
        status: task?.status.id.toString(),
      })
  }, [taskDetails])

  return (
    <Modal
      withCloseButton={false}
      opened={opened}
      onClose={onClose}
      styles={{
        overlay: { zIndex: 10000 },
        inner: { zIndex: 10001 },
        content: { overflow: "visible !important" },
      }}
      size="lg"
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header px={0} pt={0}>
          <Modal.Title>
            {task ? (
              <Group gap="sm">
                <Title size="h4" c="dimmed">
                  [{task.code}]
                </Title>
                <Title
                  size="h2"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={handleUpdateTitle}
                >
                  {task.name}
                </Title>
              </Group>
            ) : (
              <Group gap="sm">
                <ControlledTextField control={control} name="name" />
              </Group>
            )}
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <FormProvider {...formMethods}>
          <Flex direction="column" gap="xl">
            <Stack gap="md">
              <TaskMembers />
              <TaskStatus />
              <TaskTags task={taskDetails} />
              <TaskCreator creator={task?.createdBy || me} />
            </Stack>
            <AdditionalTaskTabs taskId={task?.id} />
          </Flex>
        </FormProvider>

        <Group mt="md" justify="flex-end">
          <Button type="submit" loading={updateMutation.isLoading}>
            Save
          </Button>
        </Group>
      </Box>
    </Modal>
  )
}

export default TaskDialog
