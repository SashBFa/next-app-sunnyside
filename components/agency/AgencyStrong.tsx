import {
  faArrowUpFromBracket,
  faDesktop,
  faFileLines,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const agencyStrongData = [
  {
    id: 1,
    title: "A privileged relationship with you.",
    description:
      "For Sunnyside, you are unique and therefore we do not consider you as a number. We take the time to listen to you and understand your expectations and needs. Thus, we accompany you throughout your project or you delegate it to us from A to Z.",
    icon: <FontAwesomeIcon icon={faHandshakeAngle} />,
  },
  {
    id: 2,
    title: "A creative spirit for an exclusive design.",
    description:
      "For the realization of your site, Sunnyside combines elementary ergonomic principles and a singular design for a unique result, in your image.",
    icon: <FontAwesomeIcon icon={faArrowUpFromBracket} />,
  },
  {
    id: 3,
    title: "Extensive expertise in the web domain.",
    description:
      "By collaborating with us, you work with a company on a human scale, only composed of reliable, experienced and serious collaborators.",
    icon: <FontAwesomeIcon icon={faDesktop} />,
  },
  {
    id: 4,
    title: "Rigorous project monitoring.",
    description:
      "Using a structured methodology, we create with each client a personalized specification covering the different stages of your project, the commitments, the budget, the deadlines... Everything is transparent, there are no surprises.",
    icon: <FontAwesomeIcon icon={faFileLines} />,
  },
];
const AgencyStrong = () => {
  return (
    <article className="max-w-screen-xl m-auto py-6 sm:py-10">
      <h2 className="text-center text-3xl font-bold px-12 sm:px-24 sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md">
        Our strong points
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-6">
        {agencyStrongData.map((data) => (
          <li
            key={data.id}
            className="flex flex-col items-center lg:grid lg:grid-cols-5 lg:grid-rows-2"
          >
            <p className="border-4 rounded-full text-3xl p-3 sm:text-4xl sm:p-6 flex items-center justify-center mx-auto text-[#19536B] border-[#19536B]">
              {data.icon}
            </p>
            <div className="col-span-4 row-span-2 px-6">
              <h4 className="text-center text-2xl sm:text-3xl font-bold mb-3 lg:text-left text-[#19536B]">
                {data.title}
              </h4>
              <p className="text-center text-lg lg:text-left font-thin">
                {data.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default AgencyStrong;
