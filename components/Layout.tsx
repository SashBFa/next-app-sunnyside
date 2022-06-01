import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
