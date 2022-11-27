import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#4685FF',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Lato, sans-serif',
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: false,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          gap: '.25rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          fontWeight: 500,
          color: '#898989',
          fontSize: '.75rem',
        },
      },
    },
  },
}

export default createTheme(theme)
