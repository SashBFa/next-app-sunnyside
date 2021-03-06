import {
  faAt,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import ContactForm from "../components/contact/ContactForm";
import Team from "../components/contact/Team";
import Parallax from "../components/Parallax";
import Modulo from "../components/utils/Modulo";

const Contact = () => {
  return (
    <>
      <Parallax page={"contact"} />
      <Modulo color={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:shadow-md mb-6 sm:mr-6">
            <h2 className="font-bold text-transparent text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md mb-8 sm:mb-12 lg:mb-32">
              Meet us
            </h2>
            <div className="text-xl flex items-start mt-3 lg:font-medium lg:items-center text-gray-600">
              <Typography color="primary">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl mr-3 lg:text-4xl"
                />
              </Typography>
              +40254665545
            </div>
            <div className="text-xl flex items-start mt-3 lg:font-medium lg:items-center text-gray-600">
              <Typography color="primary">
                <FontAwesomeIcon
                  icon={faAt}
                  className="text-2xl mr-3 lg:text-4xl"
                />
              </Typography>
              contact@sunnyside.com
            </div>
            <div className="text-xl flex items-start mt-3 lg:font-medium lg:items-center text-gray-600">
              <Typography color="primary">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-2xl mr-3 lg:text-4xl"
                />
              </Typography>
              3524 North Clark Street Chicago
            </div>
          </div>
          <Team />
        </div>
      </Modulo>
      <Modulo color={false}>
        <ContactForm />
      </Modulo>
    </>
  );
};

export default Contact;
