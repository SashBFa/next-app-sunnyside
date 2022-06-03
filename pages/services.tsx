import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import ServiceDo from "../components/services/ServiceDo";

const Services = () => {
  return (
    <section>
      <div className="relative">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[{ image: "./images/world.jpg", speed: -30 }]}
            className="aspect-[2/1]  h-96 sm:h-[40rem]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-7xl lg:text-9xl drop-shadow-md text-white text-center font-bold">
              What we are doing ?
            </h1>
          </div>
        </ParallaxProvider>
      </div>
      <div className="bg-neutral-900">
        <ServiceDo />
      </div>
    </section>
  );
};

export default Services;
