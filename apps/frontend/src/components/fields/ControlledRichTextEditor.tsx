import "@mantine/tiptap/styles.css"

import { Box, Text, TextareaProps } from "@mantine/core"
import { Link, RichTextEditor } from "@mantine/tiptap"
import { BubbleMenu, EditorOptions, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import { Controller, FieldValues, UseControllerProps } from "react-hook-form"

export interface ControlledTextFieldProps<FieldValueProps extends FieldValues>
  extends UseControllerProps<FieldValueProps> {
  label?: string | ReactElement
  TextAreaProps?: TextareaProps
  disableError?: boolean
  tooltip?: ReactNode
}

function ControlledRichTextEditor<FieldValueProps extends FieldValues>({
  control,
  name,
  label,
  tooltip = null,
}: ControlledTextFieldProps<FieldValueProps>) {
  const [opened, setOpened] = useState(false)

  // NOTE: not sure if this is the best way to do this. should research performance impacts
  const editor = useEditor({
    // @ts-ignore this is broken. will fix when we replace tiptap
    extensions: [StarterKit, Link],
  })

  return (
    <Controller
      control={control}
      name={name}
      render={({
        fieldState: { error },
        field: { onChange, onBlur, value, ref },
      }) => {
        const onUpdate: EditorOptions["onUpdate"] = ({ editor }) => {
          const val = editor.getJSON()
          onChange(JSON.stringify(val))
        }
        editor?.on("update", onUpdate)
        editor?.on("blur", onBlur)

        useEffect(() => {
          // if the value is JSON, parse it. else, just set the string
          try {
            editor?.commands.setContent(JSON.parse(value))
          } catch (err) {
            // do nothing
          }
        }, [value, editor])

        return (
          <Box
            style={{
              position: "relative",
            }}
          >
            {label && <Text color={error ? "red" : ""}>{label}</Text>}
            <RichTextEditor editor={editor}>
              {editor && (
                <BubbleMenu editor={editor}>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Link />
                  </RichTextEditor.ControlsGroup>
                </BubbleMenu>
              )}
              <RichTextEditor.Content />
            </RichTextEditor>
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
        )
      }}
    />
  )
}

export default ControlledRichTextEditor
