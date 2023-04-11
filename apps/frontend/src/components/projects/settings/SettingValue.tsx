import { useFormContext } from "react-hook-form"

import ControlledTextField from "@/components/fields/ControlledTextField"
import { ISetting } from "@/types/components/Settings"

const SettingValue = ({ name, dataType }: ISetting) => {
  const { control } = useFormContext()
  switch (dataType) {
    case "text":
      return (
        <ControlledTextField
          name={name}
          control={control}
          TextFieldProps={{
            sx: {
              width: 300,
            },
          }}
        />
      )
    case "long text":
      return (
        <ControlledTextField
          TextFieldProps={{
            multiline: true,
            rows: 4,
            sx: {
              width: 300,
            },
          }}
          name={name}
          control={control}
        />
      )
    default:
      return null
  }
}

export default SettingValue
