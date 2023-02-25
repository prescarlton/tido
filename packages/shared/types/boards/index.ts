export interface BoardList {
  id: string
  name: string
}

export interface Board {
  id: string
  name: string
  projectId: string
}

export * from './responses'
export * from './requests'
