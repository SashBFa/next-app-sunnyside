import "../styles/index.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const colorTheme = {
  primary: "#0284c7",
  secondary: "#db2777",
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout colorTheme={colorTheme}>
      <Component {...pageProps} colorTheme={colorTheme} />
    </Layout>
  );
}

export default MyApp;
