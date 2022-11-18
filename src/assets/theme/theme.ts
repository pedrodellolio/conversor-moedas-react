import { createTheme } from '@mui/material/';

const ITEM_HEIGHT = 65;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    sx: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: {md: 400, sm: '100%', xs: '100%'},
      marginLeft: {md: '7.4rem', sm: 0, xs: 0}
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#40f;',
      dark: '#3b00dd'
    },
    secondary: {
      main: '#E33E7F'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Montserrat"
      }
    },
    MuiTextField: {
      defaultProps: {
        InputProps: {
          sx:{
            fontFamily: 'Montserrat',
            fontSize: '1.5rem',
          }
        },
        color: "primary",
        sx: {
          fontFamily: 'Montserrat',
        }
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        sx: {
          fontFamily: 'Montserrat',
          '&hover': {
            backgroundColor: 'primary.dark'
          },
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        sx: {
          backgroundColor: 'primary.main',
          "&:hover, &.Mui-focusVisible": {
            backgroundColor: 'primary.dark'
          },
          m: 4,
          transform: {md: 'rotate(0)', sm: 'rotate(90deg)', xs: 'rotate(90deg)'}
        },
      }
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: MenuProps,
        sx: {
          fontFamily: 'Montserrat'
        }
      }
    },
    MuiMenuItem: {
      defaultProps: {
        sx: {
          fontFamily: 'Montserrat'
        }
      }
    }
  }
});


export default theme;