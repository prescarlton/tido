import { ThemeOptions } from '@mui/material'

export const darkModePalette: ThemeOptions['palette'] = {
  background: {
    paper: '#202124',
  },
}

export const lightModePalette: ThemeOptions['palette'] = {
  background: {
    default: '#F4F5F7',
    paper: '#dddddd',
  },
}

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#4685FF',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Inter, -apple-system,sans-serif',
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
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
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
    MuiIconButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 5,
          transition: 'background-color 0.1s ease-in-out',
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiTabs: {
      variants: [
        {
          props: { orientation: 'vertical' },
          style: {
            '& .MuiTabs-flexContainer': {
              gap: 8,
            },
            '& .MuiTab-root': {
              height: 36,
              minHeight: 36,
              textTransform: 'none',
              alignItems: 'flex-start',
            },
            '& .MuiTabs-indicator': {
              left: 0,
              width: 4,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              height: 10,
            },
          },
        },
      ],
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.MuiInputBase-multiline': {
            padding: 0,
          },
        },
        input: {
          padding: '.5rem 1rem',
          borderRadius: 8,
        },
      },
    },
  },
}

export default theme
