import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <section className="max-w-screen-xl m-auto flex flex-col items-center p-6">
        <Link href={"/"}>
          <a className="grow mt-2">
            <Image src={props.logo} alt="logo" width={124} height={24} />
          </a>
        </Link>
        <ul className="flex justify-between w-full sm:w-2/3 lg:w-2/4 my-8 font-medium sm:text-xl">
          {props.pages &&
            props.pages.map((page) => {
              return (
                <li
                  key={page}
                  className={`capitalize text-[${props.colorTheme.secondary}] p-2 sm:py-1 sm:px-2 hover:bg-neutral-900/10 hover:scale-105`}
                >
                  <Link href={`/${page}`}>{page}</Link>
                </li>
              );
            })}
        </ul>
        <ul className="flex justify-between w-2/4 sm:w-1/3 lg:w-1/4 text-xl ">
          {socialLink.map((link) => {
            return (
              <li
                key={link.id}
                className={`text-[${props.colorTheme.secondary}] rounded-full w-10 h-10 drop-shadow hover:bg-neutral-900/10 flex items-center justify-center hover:scale-110`}
              >
                <Link href={link.link}>
                  <a>{link.icon}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
