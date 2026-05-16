import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    white: string;
    primary: string;
    error: string;
  }

  interface TypeText {
    slate400: string;
    salte300: string;
    slate200: string;
    slate100: string;
    white: string;
    lime: string;
  }

  interface Palette {
    border: {
      main: string;
    };
  }

  interface PaletteOptions {
    border?: {
      main?: string;
    };
  }
}
