export enum SettingType {
  Text,
  Toggle,
  LongText,
}

export interface ISetting {
  label: string
  name: string
  description?: string
  dataType: SettingType
}

export interface ISettingsSection {
  sectionName: string
  settings: ISetting[]
  color?: "default" | "error" | "primary"
  onSubmit: (data: any) => void
}
