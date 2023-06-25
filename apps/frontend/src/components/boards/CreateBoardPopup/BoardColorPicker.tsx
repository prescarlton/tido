import { Box, ButtonBase, Stack, Typography } from "@mui/material"
import { ReactElement } from "react"
import { Check } from "react-feather"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

interface IControlledColorPicker<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  label?: string | ReactElement
  disableError?: boolean
  colors: string[]
}

const ControlledColorPicker = <FieldValueProps extends FieldValues>({
  colors,
  control,
  name,
  label,
}: IControlledColorPicker<FieldValueProps>) => {
  // TODO: ADD HANDLERS FOR SETTING VALUE

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Stack gap={1}>
          <Typography variant="caption">{label}</Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {colors.map((color) => (
              <ButtonBase
                key={color}
                sx={{
                  width: 50,
                  height: 30,
                  backgroundColor: color,
                  borderRadius: 1,
                  border: value === color ? "2px solid #fff" : "",
                }}
                onClick={() => onChange(color)}
              >
                {value === color && <Check />}
              </ButtonBase>
            ))}
          </Box>
        </Stack>
      )}
    />
  )
}

export default ControlledColorPicker
