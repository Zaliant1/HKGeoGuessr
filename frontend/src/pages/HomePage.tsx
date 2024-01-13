import React from "react";
import Button from "@mui/material/Button";

export const HomePage = () => {
  return (
    <div>
      <Button
        variant="outlined"
        href="https://discord.com/api/oauth2/authorize?client_id=1074939657902637058&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&scope=identify"
      >
        Link
      </Button>
    </div>
  );
};
