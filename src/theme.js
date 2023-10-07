import {createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f4ab2',
      light: '#3c7dff',
    },
    secondary: {
      main: '#1795b0',
      light: '#67cfff',
    },
    warning: {
      main: '#ff9100',
      light: '#ffc88c',
    },
    success: {
      main: '#11ff00',
      light: '#a4ff9d',
    },
    error: {
      main: '#ff0000',
      light: '#ff8a80',
    },
  },
});
export default theme;