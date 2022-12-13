import { ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material/styles'

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#4685FF',
    },
    background: {
      // default: '#FAFBFC',
      // default: '#F2F2F2',
      default: '#F4F5F7',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Open Sans, sans-serif',
      /*
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;',
      */
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 'normal',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 'normal',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
    },
    caption: {
      lineHeight: 1.5,
      color: '#898989',
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
