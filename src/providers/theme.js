// theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let customColors = {
  white: 'hsl(0, 0%, 100%)',
  slate100: 'hsl(202, 86%, 94%)',
  slate300: 'hsl(203, 41%, 72%)',
  slate500: 'hsl(200, 26%, 54%)',
  slate700: 'hsl(200, 24%, 40%)',
  slate900: 'hsl(202, 55%, 16%)',
  slate1000: 'rgba(15, 36, 48, 1)',
  yellow: '#dadc4a',
  red: 'hsl(4, 69%, 50%)',
};

let UItheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    text: {
      primary: customColors.slate900,
      slate400: customColors.slate900,
      salte300: customColors.slate700,
      slate200: customColors.slate100,
      slate100: customColors.slate100,
      white: customColors.white,
      lime: customColors.yellow,
    },
    primary: {
      main: customColors.yellow,
      light: customColors.slate300,
    },
    secondary: {
      main: customColors.yellow,
    },
    background: {
      default: customColors.slate100,
      white: customColors.white,
      primary: customColors.slate900,
      paper: customColors.slate1000
    },
    border: {
      main: customColors.slate700,
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'PlusJakartaSans',
    body1: {
      fontSize: '16px',
      fontWeight: 550,
      lineHeight: '24px',
      letterSpacing: '0.15px',
      textSizeAdjust: 0.5,
      // fontSizeAdjust: 0.5,
      color: "#92aec1",
    },
    h5: {
      fontSize: '24px',
      fontWeight: 600,
      letterSpacing: '0.15px',
      textSizeAdjust: 0.5,
      color: customColors.slate900,
    },
    h3: {

      fontSize: '50px',
      fontWeight: 700,
      letterSpacing: '0.15px',
      textSizeAdjust: 0.5,
      color: customColors.yellow,
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        style: {
          marginInline: "auto"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          padding: '10px 30px',
          borderRadius: '100vw',
          border: "none",
          outline: "none",
          fontSize: { sm: '14px', md: '16px' },
          boxShadow: "0px 2px 8px 0px rgba(43, 56, 56, 0.07)", // Thori si box shadow
          fontWeight: 700,
          color: customColors.slate900,
          textTransform: "none",
          "&:hover": {
            opacity: 0.5,
          }
        },
      },
    }
  }
});

UItheme = responsiveFontSizes(UItheme);

export default UItheme;