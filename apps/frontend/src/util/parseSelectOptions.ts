import { SelectItem } from "@mantine/core"

interface InputObject {
  id: string | number
  name: string
}

export const parseSelectOptions = (inputArray: InputObject[]): SelectItem[] => {
  return inputArray.map((item) => ({
    value: item.id as string,
    label: item.name,
  }))
}
