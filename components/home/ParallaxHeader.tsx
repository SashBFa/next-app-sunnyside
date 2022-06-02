import { useContext } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import { RespDimensions } from "../utils/AppContext";

export const ParallaxHead = () => {
  const dWidth = useContext(RespDimensions);

  const background: BannerLayer = {
    image: "./images/banner-background.png",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-7xl lg:mb-60 lg:text-9xl drop-shadow-md text-white uppercase text-center font-bold">
          We are creative
        </h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image:
      dWidth > 1024
        ? "./images/banner-foreground.png"
        : "./images/banner-foreground2.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className=" absolute inset-0 bg-gradient-to-t from-cyan-50 to-cyan-500 " />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="h-screen"
    />
  );
};
