import { ActionIcon, Popover, Title } from "@mantine/core"
import { useState } from "react"
import { TaskTag } from "shared/types/tasks"
import { Plus } from "tabler-icons-react"

import CreateTag from "@/components/boards/tasks/TaskDialog/AddTagButton/CreateTag"
import TagList from "@/components/boards/tasks/TaskDialog/AddTagButton/TagList"

interface IAddTagButton {
  taskId: string
  startingTags: TaskTag[]
}

const AddTagButton = ({ taskId, startingTags }: IAddTagButton) => {
  const [step, setStep] = useState<"list" | "edit">("list")

  const onClickAddTag = () => {
    setStep("edit")
  }
  const onClickListTags = () => {
    setStep("list")
  }
  const onClose = () => {
    setStep("list")
  }

  return (
    <Popover onClose={onClose} width={250} position="bottom-start">
      <Popover.Target>
        <ActionIcon size="md">
          <Plus />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown p="xs" title="Tags">
        <Title size="h6" pb="xxs" c="dimmed">
          Tags
        </Title>
        {step === "list" ? (
          <TagList
            switchStep={onClickAddTag}
            taskId={taskId}
            startingTags={startingTags}
          />
        ) : (
          <CreateTag switchStep={onClickListTags} />
        )}
      </Popover.Dropdown>
    </Popover>
  )
}

export default AddTagButton
