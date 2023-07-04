import {
  Box,
  CheckIcon,
  ColorSwatch,
  rem,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { ReactElement } from "react"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

interface IControlledColorPicker<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  label?: string | ReactElement
  disableError?: boolean
}

const ControlledColorPicker = <FieldValueProps extends FieldValues>({
  control,
  name,
  label,
}: IControlledColorPicker<FieldValueProps>) => {
  const theme = useMantineTheme()

  const scheme = theme.colorScheme
  // @ts-expect-error primaryShade always returns an object with
  // 'light' and 'dark' as keys, and colorScheme is always 'light' or 'dark'
  const shade = theme.primaryShade[scheme]

  return (
    <Controller
      control={control}
      name={name}
      render={({ fieldState: { error }, field: { onChange, value } }) => (
        <Stack spacing="xs">
          <Text variant="xs">{label}</Text>

          <Box
            sx={(theme) => ({
              display: "flex",
              gap: theme.spacing.sm,
              flexWrap: "wrap",
            })}
          >
            {Object.keys(theme.colors).map((color) => (
              <ColorSwatch
                key={color}
                color={theme.colors[color][shade]}
                onClick={() => onChange(color)}
              >
                {value === color && <CheckIcon width={rem(10)} />}
              </ColorSwatch>
            ))}
          </Box>
          {error && (
            <Text size="xs" color="red">
              {error?.message}
            </Text>
          )}
        </Stack>
      )}
    />
  )
}

export default ControlledColorPicker
