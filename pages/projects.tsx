import Parallax from "../components/Parallax";
import Modulo from "../components/utils/Modulo";
import ProjectCard from "../components/projects/ProjectCard";

const projectData = [
  {
    id: 1,
    entreprise: "Nicolas and Sons",
    date: "05-08-2020",
    link: "https://google.com",
    image: "./images/mobile/image-gallery-cone.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto numquam, nulla nesciunt ad aut dolores minima facere quas amet!",
    creator: "Amy Wyatt",
    icon: "./images/people/team/avatar2.jpg",
  },
  {
    id: 2,
    entreprise: "Homenick, Raynor and Konopelski",
    date: "30-10-2020",
    link: "https://google.com",
    image: "./images/mobile/image-gallery-milkbottles.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto numquam, nulla nesciunt ad aut dolores minima facere quas amet!",
    creator: "Marcella Nixon",
    icon: "./images/people/team/avatar3.jpg",
  },
  {
    id: 3,
    entreprise: "Schuster Inc",
    date: "02-01-2021",
    link: "https://google.com",
    image: "./images/mobile/image-gallery-orange.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto numquam, nulla nesciunt ad aut dolores minima facere quas amet!",
    creator: "Catherine Cohen",
    icon: "./images/people/team/avatar4.jpg",
  },
  {
    id: 4,
    entreprise: "Bauch Ltd",
    date: "06-08-2021",
    link: "https://google.com",
    image: "./images/mobile/image-gallery-cone.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto numquam, nulla nesciunt ad aut dolores minima facere quas amet!",
    creator: "Amy Wyatt",
    icon: "./images/people/team/avatar2.jpg",
  },
  {
    id: 5,
    entreprise: "Mueller and Sons",
    date: "02-02-2022",
    link: "https://google.com",
    image: "./images/mobile/image-gallery-sugar-cubes.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto numquam, nulla nesciunt ad aut dolores minima facere quas amet!",
    creator: "Anna Waters",
    icon: "./images/people/team/avatar1.jpg",
  },
  {
    id: 6,
    entreprise: "Homenick, Raynor and Konopelski",
    date: "30-10-2020",
    link: "https://google.com",
    image: "./images/mobile/image-gallery-milkbottles.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto numquam, nulla nesciunt ad aut dolores minima facere quas amet!",
    creator: "Marcella Nixon",
    icon: "./images/people/team/avatar3.jpg",
  },
];

const Projects = () => {
  return (
    <>
      <Parallax page={"projects"} />
      <Modulo color={false}>
        <h2 className="text-center text-3xl font-bold px-12 sm:px-24 sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md">
          They trusted us
        </h2>
        <ul className="grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 sm:mt-6">
          {projectData.map((card) => (
            <li key={card.id}>
              <ProjectCard card={card} />
            </li>
          ))}
        </ul>
      </Modulo>
    </>
  );
};

export default Projects;
