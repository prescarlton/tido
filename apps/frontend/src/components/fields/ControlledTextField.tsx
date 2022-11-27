import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField'
import { isEmpty } from 'lodash'
import { ReactElement } from 'react'
import { Controller, UseControllerProps, FieldValues } from 'react-hook-form'

export interface ControlledTextFieldProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  label?: string | ReactElement
  TextFieldProps?: TextFieldProps
  disableError?: boolean
}

function ControlledTextField<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  TextFieldProps = {},
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
        <TextField
          error={!isEmpty(error)}
          id={name}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          value={value}
          helperText={(!disableError && error?.message) ?? ''}
          {...TextFieldProps}
        />
      )}
    />
  )
}

export default ControlledTextField
