import { TextInput, TextInputProps } from "@mantine/core"
import { isEmpty } from "lodash"
import { ReactElement, Ref } from "react"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

export interface ControlledTextFieldProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  label?: string | ReactElement
  TextInputProps?: TextInputProps
  disableError?: boolean
}

function ControlledTextField<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  TextInputProps = {},
  disableError = false,
}: ControlledTextFieldProps<FieldValueProps>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        fieldState: { error },
        field: { onChange, onBlur, value, ref },
      }) => (
        <TextInput
          id={name}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref as Ref<HTMLInputElement>}
          value={value}
          error={(!disableError && error?.message) ?? ""}
          {...TextInputProps}
        />
      )}
    />
  )
}

export default ControlledTextField
