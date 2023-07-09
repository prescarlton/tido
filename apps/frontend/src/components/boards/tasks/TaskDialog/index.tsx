import {
  Box,
  Button,
  Flex,
  Group,
  Modal,
  Skeleton,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core"

import TaskActivity from "@/components/boards/tasks/TaskDialog/TaskActivity"
import TaskCreator from "@/components/boards/tasks/TaskDialog/TaskCreator"
import TaskDescription from "@/components/boards/tasks/TaskDialog/TaskDescription"
import TaskMembers from "@/components/boards/tasks/TaskDialog/TaskMembers"
import TaskStatus from "@/components/boards/tasks/TaskDialog/TaskStatus"
import TaskTags from "@/components/boards/tasks/TaskDialog/TaskTags"
import useGetTaskById from "@/hooks/api/tasks/useGetTaskById"
import useProjectContext from "@/contexts/ProjectContext"
import useUpdateTask from "@/hooks/api/tasks/useUpdateTask"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Task,
  TaskDetails,
  UpdateTaskBody,
  UpdateTaskRequestSchema,
} from "shared/types/tasks"
import { useEffect } from "react"

interface ITaskDialog {
  task: Task
  opened: boolean
  onClose: () => void
}

const TaskDialog = ({ task, opened, onClose }: ITaskDialog) => {
  const theme = useMantineTheme()
  const { projectId, boardId } = useProjectContext()
  const formMethods = useForm<TaskDetails>({
    defaultValues: {
      name: task.name,
      description: "",
    },
    resolver: zodResolver(UpdateTaskRequestSchema.body),
  })
  const { handleSubmit, reset } = formMethods

  const { data: taskDetails } = useGetTaskById({
    taskId: task.id,
    projectId,
    boardId: boardId as string,
  })
  const updateMutation = useUpdateTask({
    taskId: task.id,
    projectId,
    boardId: boardId as string,
  })

  const onSubmit = async (data: UpdateTaskBody) => {
    await updateMutation.mutateAsync(data)
    onClose()
  }

  useEffect(() => {
    if (taskDetails)
      reset({ name: taskDetails.name, description: taskDetails.description })
  }, [taskDetails])

  return (
    <Modal
      withCloseButton={false}
      opened={opened}
      onClose={onClose}
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      styles={{
        overlay: { zIndex: 10000 },
        inner: { zIndex: 10001 },
      }}
      size="lg"
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Modal.Title>
            {task ? (
              <Group spacing="sm">
                <Title size="h4" c="dimmed">
                  [{task.code}]
                </Title>
                <Title size="h2">{task.name}</Title>
              </Group>
            ) : (
              <Skeleton height={24} />
            )}
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <FormProvider {...formMethods}>
          <Flex direction="column" gap="xl">
            <Stack spacing="md">
              <TaskMembers />
              <TaskStatus />
              <TaskTags />
              <TaskCreator creator={task?.createdBy} />
            </Stack>
            <Stack spacing="md">
              <TaskDescription />
              <TaskActivity />
            </Stack>
          </Flex>
        </FormProvider>

        <Group mt="md" position="right">
          <Button type="submit" loading={updateMutation.isLoading}>
            Save
          </Button>
        </Group>
      </Box>
    </Modal>
  )
}

export default TaskDialog
