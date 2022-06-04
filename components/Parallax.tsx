import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

interface propsPages {
  page: string;
}

const Parallax = (props: propsPages) => {
  let imageBanner: string = "";
  let titleBanner: string = "";

  switch (props.page) {
    case "index":
      imageBanner = "mobile/image-header.jpg";
      titleBanner = "We are creative";
      break;
    case "index2":
      imageBanner = "desktop/image-header.jpg";
      titleBanner = "We are creative";
      break;
    case "agency":
      imageBanner = "aboutImg.jpg";
      titleBanner = "Fewer rules more fun!";
      break;
    case "contact":
      imageBanner = "landscape.jpg";
      titleBanner = "Let's have a talk !";
      break;
    case "projects":
      imageBanner = "world.jpg";
      titleBanner = "Our projects";
      break;
    case "services":
      imageBanner = "world.jpg";
      titleBanner = "What we are doing ?";
      break;
    default:
      imageBanner = "mobile/image-header.jpg";
      titleBanner = "What we are doing ?";
  }

  return (
    <div className="relative">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: `./images/${imageBanner}`, speed: -15 }]}
          className="aspect-[2/1] h-screen"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-7xl lg:text-9xl drop-shadow-md text-white text-center font-bold">
            {titleBanner}
          </h1>
        </div>
      </ParallaxProvider>
    </div>
  );
};

export default Parallax;
