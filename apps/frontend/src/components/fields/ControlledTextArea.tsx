import { Textarea, TextareaProps, Tooltip } from "@mantine/core"
import { ReactElement, ReactNode, Ref, useState } from "react"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

export interface ControlledTextFieldProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  label?: string | ReactElement
  TextAreaProps?: TextareaProps
  disableError?: boolean
  tooltip?: ReactNode
}

function ControlledTextArea<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  TextAreaProps = {},
  disableError = false,
  tooltip = null,
}: ControlledTextFieldProps<FieldValueProps>) {
  const [opened, setOpened] = useState(false)
  return (
    <Controller
      control={control}
      name={name}
      render={({
        fieldState: { error },
        field: { onChange, onBlur, value, ref },
      }) => (
        <Tooltip
          label={tooltip}
          opened={Boolean(tooltip) && opened}
          position="bottom-end"
          offset={-40}
          styles={{
            tooltip: {
              height: 40,
            },
          }}
        >
          <Textarea
            id={name}
            label={label}
            onChange={onChange}
            onFocus={() => setOpened(true)}
            onBlur={() => {
              setOpened(false)
              onBlur()
            }}
            ref={ref as Ref<HTMLTextAreaElement>}
            value={value}
            error={(!disableError && error?.message) ?? ""}
            {...TextAreaProps}
          />
        </Tooltip>
      )}
    />
  )
}

export default ControlledTextArea
