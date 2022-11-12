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
}

export default createTheme(theme)
