import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Image from "next/image";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    name: "Breakfast",
    function: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    name: "Breakfast",
    function: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    name: "Breakfast",
    function: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    name: "Breakfast",
    function: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    name: "Breakfast",
    function: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    name: "Breakfast",
    function: "@bkristastucchio",
  },
];

const Team = () => {
  return (
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className="w-32 sm:w-40 lg:w-60">
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
            width="100%"
            height="100%"
          />
          <ImageListItemBar title={item.name} subtitle={item.function} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Team;
