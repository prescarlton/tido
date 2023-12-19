import { Box } from "@mantine/core"
import { useFormContext } from "react-hook-form"

import ControlledTextArea from "@/components/fields/ControlledTextArea"
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
          TextInputProps={{
            style: {
              width: 300,
            },
          }}
        />
      )
    case SettingType.LongText:
      return (
        <ControlledTextArea
          TextAreaProps={{
            style: {
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
