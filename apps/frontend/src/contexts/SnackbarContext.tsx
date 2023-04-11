import { Alert, Snackbar } from "@mui/material"
import { createContext, ReactNode, useContext, useState } from "react"

type OpenSnackbarProps = {
  message: string
  type?: "success" | "info" | "warning" | "error"
}

type SnackbarContextType = {
  openSnackbar: (config: OpenSnackbarProps) => void
}

const SnackbarContext = createContext<SnackbarContextType>(
  {} as SnackbarContextType
)

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [type, setType] = useState<"success" | "info" | "warning" | "error">(
    "info"
  )

  const openSnackbar = (config: OpenSnackbarProps) => {
    setMessage(config.message)
    setType(config.type || "info")
    setOpen(true)
  }

  return (
    <SnackbarContext.Provider value={{ openSnackbar }}>
      {children}
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}

const useSnackbarContext = () => {
  const context = useContext(SnackbarContext)
  if (context === undefined) {
    throw new Error("useSnackbarContext must be used within a SnackbarProvider")
  }
  return context
}

export default useSnackbarContext
