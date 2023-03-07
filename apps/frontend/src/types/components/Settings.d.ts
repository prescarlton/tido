export interface ISetting {
  title: string
  description?: string
  dataType: 'text' | 'toggle' | 'long text'
}
export interface ISettingsSection {
  sectionName: string
  settings: ISetting[]
}
