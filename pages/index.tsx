import { ParallaxProvider } from "react-scroll-parallax";
import HomeClient from "../components/home/HomeClient";
import HomeGrid from "../components/home/HomeGrid";
import HomeLittleGrid from "../components/home/HomeLittleGrid";
import { ParallaxHead } from "../components/home/ParallaxHeader";

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
      <HomeClient />
      <HomeLittleGrid />
    </>
  );
};

export default index;
