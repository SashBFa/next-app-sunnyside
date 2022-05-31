import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Navbar from "./Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: grey[50],
    },
    mode: "light",
  },
});

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
