import "../styles/index.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const colorTheme = {
  primary: "#90D4C5",
  secondary: "#19536B",
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout colorTheme={colorTheme}>
      <Component {...pageProps} colorTheme={colorTheme} />
    </Layout>
  );
}

export default MyApp;
