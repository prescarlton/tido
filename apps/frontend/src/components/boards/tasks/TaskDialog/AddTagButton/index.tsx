import { ActionIcon, Menu, Popover } from "@mantine/core"
import { useState } from "react"
import { Plus } from "tabler-icons-react"

import CreateTag from "@/components/boards/tasks/TaskDialog/AddTagButton/CreateTag"
import ListTags from "@/components/boards/tasks/TaskDialog/AddTagButton/ListTags"

const AddTagButton = () => {
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
    <Popover onClose={onClose} width={200} position="bottom-start">
      <Popover.Target>
        <ActionIcon size="xs">
          <Plus />
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown>
        {step === "list" ? (
          <ListTags switchStep={onClickAddTag} />
        ) : (
          <CreateTag switchStep={onClickListTags} />
        )}
      </Popover.Dropdown>
    </Popover>
  )
}

export default AddTagButton
