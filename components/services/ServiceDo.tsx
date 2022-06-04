import {
  faCommentDots,
  faListCheck,
  faRankingStar,
  faSwatchbook,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faListCheck} />,
    color: "text-purple-500",
    title: "Website audit",
    subtitle: "A complete audit of your website and a file of recommendations.",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faWindowRestore} />,
    color: "text-lime-500",
    title: "Website creation",
    subtitle: "Increase your sales through your website.",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faRankingStar} />,
    color: "text-yellow-500",
    title: "SEO referencing",
    subtitle:
      "Improve the visibility of your website thanks to natural referencing.",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faCommentDots} />,
    color: "text-red-500",
    title: "Follow-up, advice and training",
    subtitle: "Train your teams in natural referencing and SEO strategy.",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faSwatchbook} />,
    color: "text-blue-500",
    title: "Digital strategy",
    subtitle: "Achieving your goals through the marketing plan and strategy.",
  },
];

const ServiceDo = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold px-12 sm:px-24 sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md">
        The services of our digital communication agency
      </h2>
      <h3 className="text-center text-lg p-6 sm:px-16 sm:text-2xl lg:text-3xl">
        In order to help you with all your web projects, our communication
        agency offers you a wide range of services:
      </h3>
      <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center">
        {servicesData.map((serv) => (
          <li
            key={serv.id}
            className="flex flex-col justify-center items-center m-3 p-3 sm:w-72"
          >
            <motion.p
              className={`${serv.color} text-9xl drop-shadow cursor-pointer`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {serv.icon}
            </motion.p>
            <h3 className="text-center text-2xl font-bold mt-3">
              {serv.title}
            </h3>
            <h4 className="text-center text-xl fond-medium">{serv.subtitle}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceDo;
