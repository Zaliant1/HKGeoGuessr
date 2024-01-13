import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    discord: {
      main: "#5865F2",
    },
    hollowKnight: {
      main: "#525F82",
      dark: "#0E1122",
      darkAccent: "#2C385E",
      accent: "#B6A9D5",
      alt: "#807CAE",
    },
    silksong: {
      main: "#A0402F",
      dark: "#2F0D19",
      darkAccent: "#78131E",
      accent: "#E87C58",
      alt: "#D8CCB8",
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
  },
} as const;

export default theme;
