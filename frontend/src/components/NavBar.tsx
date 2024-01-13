import React, { useState } from "react";
import { themeGetter } from "../utils";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";

type ThemeType = "hollowKnight" | "silksong";

export const NavBar: React.FC = () => {
  const [customTheme, setTheme] = useState<ThemeType>("hollowKnight");

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: themeGetter(customTheme) }}
      >
        <Toolbar>
          <Grid container>
            <Grid item lg={6} textAlign="center">
              <MenuItem onClick={() => setTheme("hollowKnight")}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Hollow Knight
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item lg={6} textAlign="center">
              <MenuItem onClick={() => setTheme("silksong")}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Silksong
                </Typography>
              </MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};
