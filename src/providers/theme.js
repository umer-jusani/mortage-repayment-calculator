// theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let customColors = {
  white: 'hsl(0, 0%, 100%)',
  slate100: 'hsl(202, 86%, 94%)',
  slate300: 'hsl(203, 41%, 72%)',
  slate500: 'hsl(200, 26%, 54%)',
  slate700: 'hsl(200, 24%, 40%)',
  slate900: 'hsl(202, 55%, 16%)',
  yellow: 'hsl(61, 70%, 52%)',
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
      color: customColors.slate700,
    },
    h5: {
      fontSize: '24px',
      fontWeight: 700,
      letterSpacing: '0.15px',
      textSizeAdjust: 0.5,
      color: customColors.slate900,
    },
    h3: {
      fontSize: '45px',
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
  }
});

UItheme = responsiveFontSizes(UItheme);

export default UItheme;