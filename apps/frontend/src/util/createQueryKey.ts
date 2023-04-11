export const createQueryKey = (keyId: string) => {
  const key = {
    all: [keyId] as const,
    lists: () => [...key.all, "list"] as const,
    list: (filters: { [key: string]: any }) =>
      [...key.lists(), { filters }] as const,
    details: () => [...key.all, "detail"] as const,
    detail: (id: string) => [...key.details(), id] as const,
  }
  return key
}
