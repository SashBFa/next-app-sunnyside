import "../styles/index.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const colorTheme = {
  primary: "#90D4C5",
  secondary: "#19536B",
};
const theme = createTheme({
  palette: {
    primary: {
      main: "#90D4C5",
    },
    secondary: {
      main: "#19536B",
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout colorTheme={colorTheme}>
        <Component {...pageProps} colorTheme={colorTheme} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
