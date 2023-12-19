import { ComboboxItem } from "@mantine/core"

interface InputObject {
  id: string | number
  name: string
}

export const parseSelectOptions = (
  inputArray: InputObject[]
): ComboboxItem[] => {
  return inputArray.map((item) => ({
    value: item.id.toString(),
    label: item.name,
  }))
}
