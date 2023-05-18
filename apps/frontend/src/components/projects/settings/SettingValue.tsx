import { Box } from "@mui/material"
import { useFormContext } from "react-hook-form"

import ControlledTextField from "@/components/fields/ControlledTextField"
import { ISetting, SettingType } from "@/types/components/Settings"

const SettingValue = ({ name, dataType }: ISetting) => {
  const { control } = useFormContext()
  switch (dataType) {
    case SettingType.Text:
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
    case SettingType.LongText:
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
    case SettingType.Toggle:
      return <Box>toggle</Box>
    default:
      return null
  }
}

export default SettingValue
