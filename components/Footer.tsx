import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface navProps {
  logo: string;
  colorTheme: { primary: string; secondary: string };
  pages: string[];
}
const socialLink = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faFacebook} />,
    link: "/",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faInstagram} />,
    link: "/",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faTwitter} />,
    link: "/",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faPinterest} />,
    link: "/",
  },
];

const Footer = (props: navProps) => {
  return (
    <footer className={`w-screen bg-[${props.colorTheme.primary}]`}>
      <svg
        className="bg-transparent"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          className="fill-white"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
        ></path>
      </svg>
      <section className="max-w-screen-xl m-auto flex flex-col items-center p-6">
        <Link href={"/"}>
          <a className="grow mt-2">
            <Image src={props.logo} alt="logo" width={124} height={24} />
          </a>
        </Link>
        <ul className="flex justify-between w-full sm:w-2/3 lg:w-2/4 my-3 font-medium sm:text-xl">
          {props.pages &&
            props.pages.map((page) => {
              return (
                <Typography
                  component="li"
                  color="secondary"
                  key={page}
                  className={` sm:text-2xl  capitalize p-2 sm:py-1 sm:px-2 hover:bg-neutral-900/10 hover:scale-105`}
                >
                  <Link href={`/${page}`}>{page}</Link>
                </Typography>
              );
            })}
        </ul>
        <ul className="flex justify-between w-3/4 sm:w-1/3 lg:w-1/4 text-xl ">
          {socialLink.map((link) => {
            return (
              <Typography
                component="li"
                color="secondary"
                key={link.id}
                className={`text-xl sm:text-2xl lg:text-3xl rounded-full w-10 lg:w-12 h-10 lg:h-12 drop-shadow hover:bg-neutral-900/10 flex items-center justify-center hover:scale-110`}
              >
                <Link href={link.link}>
                  <a>{link.icon}</a>
                </Link>
              </Typography>
            );
          })}
        </ul>
        <Typography
          component="p"
          variant="body1"
          color="secondary"
          className="sm:text-xl mt-3"
        >
          Copyright © Sunnyside {new Date().getFullYear()}
        </Typography>
      </section>
    </footer>
  );
};

export default Footer;
