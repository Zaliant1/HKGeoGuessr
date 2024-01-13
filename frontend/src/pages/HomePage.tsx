import React from "react";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from "@mui/material";
import { Outlet } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <Grid>
      <Button
        variant="outlined"
        href="https://discord.com/api/oauth2/authorize?client_id=1074939657902637058&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&scope=identify"
      >
        Link
      </Button>
    </Grid>
  );
};
