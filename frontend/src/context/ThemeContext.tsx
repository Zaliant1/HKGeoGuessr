// import React, { createContext, useEffect, useMemo, useState } from "react";

// import {
//   ThemeProvider as MuiThemeProvider,
//   createTheme,
// } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";

// import { baseTheme } from "../theme";

// const ThemeContext = createContext({});

// const buildTheme = (mode) => {
//   baseTheme.palette.mode = mode;
//   return createTheme({ ...baseTheme });
// };

// const ThemeContextProvider = (props) => {
//   const theme = useMemo(() => buildTheme(mode));

//   const handleModeChange = () => {
//     let newMode;
//     if (mode === "dark") {
//       newMode = "light";
//     } else {
//       newMode = "dark";
//     }
//     setMode(newMode);
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         switchMode: () => handleModeChange(),
//         theme: theme,
//       }}
//     >
//       <MuiThemeProvider theme={{ ...theme }}>
//         <>
//           <CssBaseline />
//           {props.children}
//         </>
//       </MuiThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeContextProvider, ThemeContext };
