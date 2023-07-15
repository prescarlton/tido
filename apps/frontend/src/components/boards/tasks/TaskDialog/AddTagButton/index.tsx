import { ActionIcon, Popover, Title } from "@mantine/core"
import { useState } from "react"
import { TaskTag } from "shared/types/tasks"
import { Plus } from "tabler-icons-react"

import TagForm from "@/components/boards/tasks/TaskDialog/AddTagButton/TagForm"
import TagList from "@/components/boards/tasks/TaskDialog/AddTagButton/TagList"

interface IAddTagButton {
  taskId: string
  startingTags: TaskTag[]
}

const AddTagButton = ({ taskId, startingTags }: IAddTagButton) => {
  const [step, setStep] = useState<"list" | "edit">("list")
  const [selectedTag, setSelectedTag] = useState<TaskTag>()

  const onClickAddTag = (selectedTag?: TaskTag) => {
    setSelectedTag(selectedTag)
    setStep("edit")
  }
  const onClickListTags = () => {
    setSelectedTag(undefined)
    setStep("list")
  }
  const onClose = () => {
    setSelectedTag(undefined)
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
          <TagForm switchStep={onClickListTags} tag={selectedTag} />
        )}
      </Popover.Dropdown>
    </Popover>
  )
}

export default AddTagButton
