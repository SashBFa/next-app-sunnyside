import { ParallaxProvider } from "react-scroll-parallax";
import HomeGrid from "../components/HomeGrid";
import { ParallaxHead } from "../components/ParallaxHeader";

interface pageProps {
  colorTheme: { primary: string; secondary: string };
}

const index = (props: pageProps) => {
  return (
    <>
      <ParallaxProvider>
        <ParallaxHead />
      </ParallaxProvider>
      <HomeGrid />
    </>
  );
};

export default index;
