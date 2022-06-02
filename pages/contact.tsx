import {
  faAt,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            className="aspect-[2/1]  h-96 sm:h-[40rem]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-7xl lg:text-9xl drop-shadow-md text-white text-center font-bold">
              Let&apos;s have a talk !
            </h1>
          </div>
        </ParallaxProvider>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-around sm:items-start my-6">
        <article>
          <h2>Meet us</h2>
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            +40254665545
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faAt} />
            </span>
            contact@sunnyside.com
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            3524 North Clark Street Chicago, IL 60657
          </p>
        </article>
        <Team />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
