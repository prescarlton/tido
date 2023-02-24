export interface DefaultResponse<DataType = Record<string, any>> {
  data?: DataType
  error?: { message: string; error?: string }
  message?: string
}

export interface DefaultListResponse extends DefaultResponse {
  total: number
}
