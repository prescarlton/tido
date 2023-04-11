export interface ISetting {
  label: string
  name: string
  description?: string
  dataType: "text" | "toggle" | "long text"
}
export interface ISettingsSection {
  sectionName: string
  settings: ISetting[]
  color?: "default" | "error" | "primary"
  onSubmit: (data: any) => void
}
