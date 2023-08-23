import { Tabs, Text } from "@mantine/core"

import TaskActivity from "./TaskActivity"
import TaskDescription from "./TaskDescription"

interface IAdditionalTaskTabs {
  taskId: string
}

const AdditionalTaskTabs = ({ taskId }: IAdditionalTaskTabs) => {
  return (
    <Tabs defaultValue="description">
      <Tabs.List>
        <Tabs.Tab value="description">Description</Tabs.Tab>
        <Tabs.Tab value="activity">Activity</Tabs.Tab>
        <Tabs.Tab value="subtasks">Subtasks</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="description" pt="sm">
        <TaskDescription />
      </Tabs.Panel>
      <Tabs.Panel value="activity" pt="sm">
        <TaskActivity taskId={taskId} />
      </Tabs.Panel>
      <Tabs.Panel value="subtasks" pt="sm">
        <Text>Subtasks Coming soon!</Text>
      </Tabs.Panel>
    </Tabs>
  )
}

export default AdditionalTaskTabs
