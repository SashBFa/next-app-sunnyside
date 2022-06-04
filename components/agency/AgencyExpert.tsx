import { faDigitalOcean } from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faDesktop,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const agencyExpertData = [
  {
    id: 1,
    title: "Showcase site",
    description:
      "In today's world, any credible business must have a website. It is a reflection of your company and allows you to strengthen your notoriety. We develop ergonomic showcase sites with a clear and dynamic design, adapted to smartphones and tablets in order to increase the user experience.",
    icon: <FontAwesomeIcon icon={faDesktop} />,
  },
  {
    id: 2,
    title: "E-commerce site",
    description:
      "In full expansion, internet commerce allows you to extend your activities around the world, 24 hours a day, to customers you would never have reached. This is why the Sunnyside e-business experts advise you from A to Z and support you throughout your project.",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
  },
  {
    id: 3,
    title: "Referencing",
    description:
      "The referencing of your website is a job in its own right that requires real skills in this area. Our Sunnyside team is made up entirely of professionals, which allows us to offer you specific services both in terms of natural referencing and for your Google Adwords, Facebook campaigns, etc.",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Sunnyside offers you a 360° approach for the e-marketing of your company. From e-mailing solutions to online surveys, via social networks or the creation of event web pages, our experts integrate your digital communication into a coherent strategic approach.",
    icon: <FontAwesomeIcon icon={faDigitalOcean} />,
  },
];
const AgencyExpert = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold px-12 sm:px-24 sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md">
        Our areas of expertise
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-6">
        {agencyExpertData.map((data) => (
          <li
            key={data.id}
            className="flex flex-col items-center lg:grid lg:grid-cols-5 lg:grid-rows-2"
          >
            <p className="border-4 rounded-full text-3xl p-3 sm:text-4xl sm:p-6 flex items-center justify-center mx-auto text-[#90D4C5] border-[#90D4C5]">
              {data.icon}
            </p>
            <div className="col-span-4 row-span-2 px-6">
              <h4 className="text-center text-2xl sm:text-3xl font-bold mb-3 lg:text-left text-[#90D4C5]">
                {data.title}
              </h4>
              <p className="text-center text-lg lg:text-left font-thin">
                {data.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AgencyExpert;
