import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  MenuItem,
} from "@mui/material";

export const NavBar = () => {
  const { theme, switchMode } = useContext(ThemeContext);

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.default.main }}
      >
        <Toolbar>
          <Grid container>
            <Grid item lg={6} textAlign="center">
              <MenuItem onClick={() => switchMode("hollowKnight")}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Hollow Knight
                </Typography>
              </MenuItem>
            </Grid>
            <Grid item lg={6} textAlign="center">
              <MenuItem onClick={() => switchMode("silksong")}>
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
