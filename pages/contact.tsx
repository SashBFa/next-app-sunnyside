import {
  faAt,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import ContactForm from "../components/contact/ContactForm";
import Team from "../components/contact/Team";

const Contact = () => {
  return (
    <section>
      <div className="relative">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[{ image: "./images/landscape.jpg", speed: -30 }]}
            className="aspect-[2/1]  h-96 sm:h-[41rem] lg:h-screen"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-7xl lg:text-9xl drop-shadow-md text-white text-center font-bold">
              Let&apos;s have a talk !
            </h1>
          </div>
        </ParallaxProvider>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 m-3 sm:m-12 sm:max-w-2xl sm:mx-auto lg:max-w-5xl">
        <article className="m-3 sm:shadow-md">
          <h2 className="font-bold text-transparent text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md mb-8 sm:mb-12 lg:mb-32">
            Meet us
          </h2>
          <p className="text-xl flex items-start mt-3 lg:font-medium lg:items-center text-gray-600">
            <Typography color="primary">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-2xl mr-3 lg:text-4xl"
              />
            </Typography>
            +40254665545
          </p>
          <p className="text-xl flex items-start mt-3 lg:font-medium lg:items-center text-gray-600">
            <Typography color="primary">
              <FontAwesomeIcon
                icon={faAt}
                className="text-2xl mr-3 lg:text-4xl"
              />
            </Typography>
            contact@sunnyside.com
          </p>
          <p className="text-xl flex items-start mt-3 lg:font-medium lg:items-center text-gray-600">
            <Typography color="primary">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-2xl mr-3 lg:text-4xl"
              />
            </Typography>
            3524 North Clark Street Chicago
          </p>
        </article>
        <Team />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
