import { Select, SelectProps } from "@mantine/core"
import { ReactElement } from "react"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

import { parseSelectOptions } from "@/util/parseSelectOptions"

export interface ControlledSelectProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  options: any
  label?: string | ReactElement
  SelectProps?: SelectProps
  disableError?: boolean
}

function ControlledSelect<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  options,
  SelectProps = {} as SelectProps,
  disableError = false,
}: ControlledSelectProps<FieldValueProps>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ fieldState: { error }, field }) => (
        <Select
          {...field}
          id={name}
          label={label}
          error={(!disableError && error?.message) ?? ""}
          {...SelectProps}
          data={parseSelectOptions(options)}
        />
      )}
    />
  )
}

export default ControlledSelect
