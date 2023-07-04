import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { CreateBoardBody, CreateBoardSchema } from "shared/types/boards"

import ControlledColorPicker from "@/components/boards/CreateBoardPopup/BoardColorPicker"
import ControlledTextField from "@/components/fields/ControlledTextField"
import useCreateBoard from "@/hooks/api/boards/useCreateBoard"
import { COLORS } from "@/util/colors"

interface ICreateBoardPopup {
  anchorEl?: HTMLElement
  onClose: () => void
}

const CreateBoardPopup = ({ anchorEl, onClose }: ICreateBoardPopup) => {
  const createMutation = useCreateBoard()

  const formMethods = useForm({
    defaultValues: { name: "", color: "" },
    resolver: zodResolver(CreateBoardSchema.body),
  })
  const { control, reset, handleSubmit } = formMethods

  const handleClose = () => {
    reset()
    onClose()
  }
  const onSubmit = async (data: CreateBoardBody) => {
    await createMutation.mutateAsync(data)
  }

  return (
    <Menu
      open={Boolean(anchorEl)}
      onClose={handleClose}
      anchorEl={anchorEl}
      PaperProps={{
        sx: {
          width: 300,
        },
      }}
      MenuListProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1,
        },
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography>Create Board</Typography>
      </Box>
      <IconButton
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={handleClose}
      >
        <Close />
      </IconButton>
      <Box
        sx={{
          px: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ControlledTextField control={control} name="name" label="Board Name" />
        <FormProvider {...formMethods}>
          <ControlledColorPicker
            colors={COLORS}
            name="color"
            control={control}
            label="Board Color"
          />
        </FormProvider>
        <Button type="submit">Create</Button>
      </Box>
    </Menu>
  )
}

export default CreateBoardPopup
