import { Box, Stack, TextField, Typography, useTheme } from "@mui/material"
import { FocusEvent, useEffect, useRef, useState } from "react"
import { Board } from "shared/types/boards"

import CreateTaskButton from "@/components/boards/CreateTaskButton"
import useProjectContext from "@/contexts/ProjectContext"
import useRenameBoard from "@/hooks/api/boards/useRenameBoard"

import EditBoardButton from "./EditBoardButton"

const BoardPageHeader = ({ board }: { board: Board }) => {
  const [showTextField, setShowTextField] = useState(false)
  const textFieldRef = useRef<HTMLDivElement>(null)
  const { project } = useProjectContext()
  const theme = useTheme()

  const toggleTextField = () => {
    setShowTextField((prev) => !prev)
  }
  const renameMutation = useRenameBoard()

  const handleBlurTextField = async ({
    target,
  }: FocusEvent<HTMLInputElement>) => {
    if (target.value) {
      await renameMutation.mutateAsync({
        name: target.value,
        boardId: board.id,
        projectId: project?.id as string,
      })
      setShowTextField(false)
    }
  }

  useEffect(() => {
    if (showTextField) textFieldRef.current?.focus()
  }, [showTextField])

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mx: 4,
        my: 2,
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flex: 1,
        }}
      >
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          {showTextField ? (
            <TextField
              defaultValue={board.name}
              onBlur={handleBlurTextField}
              InputProps={{
                sx: {
                  fontWeight: "bold",
                  fontSize: theme.typography.h3.fontSize,
                  minWidth: 0,
                },
              }}
              inputRef={textFieldRef}
              variant="standard"
            />
          ) : (
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold" }}
              onClick={toggleTextField}
            >
              {board.name}
            </Typography>
          )}
        </Stack>
      </Box>
      <CreateTaskButton />
      <EditBoardButton />
    </Box>
  )
}

export default BoardPageHeader
