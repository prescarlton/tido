import { ISetting } from "@/types/components/Settings"

const SettingList: ISetting[] = [
  {
    label: "Project Name",
    name: "name",
    dataType: "text",
  },
  {
    label: "Project Description",
    name: "description",
    dataType: "long text",
    description: "Short description of the project",
  },
]

export default SettingList
