import { useFormContext } from "react-hook-form"

import ControlledTextField from "@/components/fields/ControlledTextField"
import { ISetting, SettingType } from "@/types/components/Settings"
import ControlledTextArea from "@/components/fields/ControlledTextArea"
import { Box } from "@mantine/core"

const SettingValue = ({ name, dataType }: ISetting) => {
  const { control } = useFormContext()
  switch (dataType) {
    case SettingType.Text:
      return (
        <ControlledTextField
          name={name}
          control={control}
          TextInputProps={{
            sx: {
              width: 300,
            },
          }}
        />
      )
    case SettingType.LongText:
      return (
        <ControlledTextArea
          TextAreaProps={{
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
