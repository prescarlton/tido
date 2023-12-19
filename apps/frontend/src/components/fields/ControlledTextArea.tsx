import { Box, Textarea, TextareaProps, Tooltip } from "@mantine/core"
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
        <Box
          style={{
            position: "relative",
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
          {tooltip && (
            <Box
              style={(theme) => ({
                opacity: opened ? 1 : 0,
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: theme.spacing.xxs,
                backgroundColor: "#000000aa",
                padding: theme.spacing.xxs,
                borderRadius: theme.radius.md,
                color: theme.white,
                transition: ".2s opacity ease-in-out",
              })}
            >
              {tooltip}
            </Box>
          )}
        </Box>
      )}
    />
  )
}

export default ControlledTextArea
