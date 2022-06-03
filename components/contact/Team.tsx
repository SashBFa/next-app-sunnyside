import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Image from "next/image";

const itemData = [
  {
    img: "./images/people/team/avatar1.jpg",
    name: "Anna Waters",
    function: "CEO",
  },
  {
    img: "./images/people/team/avatar2.jpg",
    name: "Amy Wyatt",
    function: "Team Leader",
  },
  {
    img: "./images/people/team/avatar3.jpg",
    name: "Marcella Nixon",
    function: "Marketing",
  },
  {
    img: "./images/people/team/avatar4.jpg",
    name: "Catherine Cohen",
    function: "Graphism",
  },
  {
    img: "./images/people/team/avatar5.jpg",
    name: "John Meier",
    function: "Developer",
  },
  {
    img: "./images/people/team/avatar6.jpg",
    name: "William Harper",
    function: "Developer",
  },
];

const Team = () => {
  return (
    <ImageList className="shadow-xl">
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          className="w-36 sm:w-40 lg:cursor-pointer group relative"
        >
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
            width="100%"
            height="150%"
          />
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="hidden lg:block absolute text-white bottom-2 right-2 text-2xl group-hover:opacity-0"
          />
          <ImageListItemBar
            title={item.name}
            subtitle={item.function}
            className="lg:opacity-0 group-hover:opacity-100 transition-all duration-500"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Team;
