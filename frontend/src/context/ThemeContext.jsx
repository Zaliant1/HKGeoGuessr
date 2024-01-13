import React, { createContext, useEffect, useMemo, useState } from "react";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const THEME = {
  palette: {
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
};

const ThemeContext = createContext({});

const buildTheme = (mode) => {
  let newTheme = { ...THEME };
  newTheme.palette.default = THEME.palette[mode];
  return createTheme(newTheme);
};

const ThemeContextProvider = (props) => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "hollowKnight"
  );
  const theme = useMemo(() => buildTheme(mode));

  const handleModeChange = (mode) => {
    localStorage.setItem("mode", mode);
    setMode(mode);
  };

  useEffect(() => {
    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "hollowKnight");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        switchMode: (mode) => handleModeChange(mode),
        theme: theme,
      }}
    >
      <MuiThemeProvider theme={{ ...theme }}>
        <>
          <CssBaseline />
          {props.children}
        </>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
