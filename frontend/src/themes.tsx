import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    discord: PaletteColor;
    hollowKnight: PaletteColor;
    silksong: PaletteColor;
  }

  interface PaletteOptions {
    discord?: PaletteColorOptions;
    hollowKnight?: PaletteColorOptions;
    silksong?: PaletteColorOptions;
  }

  interface PaletteColor {
    main: string;
  }

  interface PaletteColorOptions {
    main?: string;
    dark?: string;
    darkAccent?: string;
    accent?: string;
    alt?: string;
  }
}

export const theme = createTheme({
  palette: {
    discord: {
      main: '#5865F2',
    },
    hollowKnight: {
      main: '#525F82',
      dark: '#0E1122',
      darkAccent: "#2C385E",
      accent: "#B6A9D5",
      alt: "#807CAE"
    },
    silksong: {
        main: '#A0402F',
        dark: '#2F0D19',
        darkAccent: "#78131E",
        accent: "#E87C58",
        alt: "#D8CCB8"
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
});


  