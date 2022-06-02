import { faBars, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface navProps {
  logo: string;
  color: string;
  pages: string[];
}

const Navbar = (props: navProps) => {
  const colorPrimary = props.color ? props.color : "transparant";

  const burgerStyleOpen: string = "block";
  const burgerStyleClose: string = "hidden";
  const linkStyle: string = `cursor-pointer capitalize w-full p-2 sm:mr-0 sm:ml-4 sm:drop-shadow sm:transition sm:duration-300 sm:py-1 sm:px-2 hover:bg-neutral-900/10`;

  const [burgerMenu, setBurgerMenu] = useState<boolean>(true);
  const [burgerClass, setBurgerClass] = useState<string>(burgerStyleClose);

  const handleOpenMenu = () => {
    setBurgerMenu(false);
    setBurgerClass(burgerStyleOpen);
  };
  const handleCloseMenu = () => {
    setBurgerMenu(true);
    setBurgerClass(burgerStyleClose);
  };

  return (
    <nav className={`absolute z-10 w-screen bg-[${colorPrimary}]`}>
      <section className="max-w-screen-xl m-auto flex items-center  p-2 relative">
        <Link href={"/"}>
          <a className="grow mt-2">
            <Image src={props.logo} alt="logo" width={124} height={24} />
          </a>
        </Link>
        <div className="sm:hidden">
          {burgerMenu ? (
            <button
              onClick={handleOpenMenu}
              className={`text-white rounded-full w-10 h-10 drop-shadow hover:bg-neutral-900/10`}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          ) : (
            <button
              onClick={handleCloseMenu}
              className={`text-white rounded-full w-10 h-10 drop-shadow text-xl hover:bg-neutral-900/10`}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>
        <ul
          className={`absolute top-16 right-2 w-6/12 shadow-lg py-2 font-medium bg-white ${burgerClass} flex-col flex sm:font-bold sm:bg-transparent items-end sm:p-0 sm:relative sm:top-0 sm:right-0 sm:flex-row sm:shadow-none sm:items-center sm:text-white sm:w-fit sm:flex`}
        >
          {props.pages &&
            props.pages.map((page) => {
              return (
                <li className={`${linkStyle}`} key={page}>
                  <Link href={`/${page}`}>{page}</Link>
                </li>
              );
            })}

          <li className={`hidden sm:block cursor-pointer sm:ml-12`}>
            <Link href={"/"}>
              <a>
                <button
                  className={`text-white rounded-full w-10 h-10 drop-shadow hover:bg-neutral-900/10`}
                >
                  <FontAwesomeIcon icon={faHouse} />
                </button>
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
