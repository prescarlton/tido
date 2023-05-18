import { ISetting, SettingType } from "@/types/components/Settings"

const SettingList: ISetting[] = [
  {
    label: "Project Name",
    name: "name",
    dataType: SettingType.Text,
  },
  {
    label: "Project Description",
    name: "description",
    dataType: SettingType.LongText,
    description: "Short description of the project",
  },
]

export default SettingList
