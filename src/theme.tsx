import { createTheme,responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

// theme = createTheme(theme, {
//   palette: {
//     info: {
//       main: theme.palette.secondary.main,
//     },
//   },
// });

theme=responsiveFontSizes(theme)
export default theme;
