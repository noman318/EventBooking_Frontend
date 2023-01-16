import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Typography } from "@mui/material";
import Login from "./Screens/Login/Login";

function App():JSX.Element {
  return (
  <ThemeProvider theme={theme}>
    {/* <Typography>Hello</Typography> */}
    <Login/>
  </ThemeProvider>
  );
}

export default App;
