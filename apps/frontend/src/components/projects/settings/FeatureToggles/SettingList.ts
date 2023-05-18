import { ISetting, SettingType } from "@/types/components/Settings"

const FeaturesSettingList: ISetting[] = [
  {
    label: "Boards",
    name: "boards",
    dataType: SettingType.Toggle,
  },
  {
    label: "Resources",
    name: "resources",
    dataType: SettingType.Toggle,
  },
  {
    label: "Announcements",
    name: "announcements",
    dataType: SettingType.Toggle,
  },
  {
    label: "Workflows",
    name: "workflows",
    dataType: SettingType.Toggle,
  },
]
export default FeaturesSettingList
