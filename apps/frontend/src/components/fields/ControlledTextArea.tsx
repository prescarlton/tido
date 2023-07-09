import {
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
} from "@mantine/core"
import { isEmpty } from "lodash"
import { ReactElement, Ref } from "react"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

export interface ControlledTextFieldProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  label?: string | ReactElement
  TextAreaProps?: TextareaProps
  disableError?: boolean
}

function ControlledTextArea<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  TextAreaProps = {},
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
        <Textarea
          id={name}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref as Ref<HTMLTextAreaElement>}
          value={value}
          error={(!disableError && error?.message) ?? ""}
          {...TextAreaProps}
        />
      )}
    />
  )
}

export default ControlledTextArea
