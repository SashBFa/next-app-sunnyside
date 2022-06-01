import { faBars, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const colorPrimary: string = "bg-sky-500";

  const burgerStyleOpen: string = "block";
  const burgerStyleClose: string = "hidden";
  const linkStyle: string = `cursor-pointer w-full p-2 sm:mr-0 sm:ml-4 sm:drop-shadow sm:transition sm:duration-300 sm:py-1 sm:px-2 hover:bg-neutral-900/10`;

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
    <nav className={`${colorPrimary}`}>
      <section className="max-w-screen-xl flex items-center p-2 relative">
        <Link href={"/"}>
          <a className="grow mt-2">
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              width={124}
              height={24}
            />
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
          className={`absolute top-16 right-2 w-6/12 shadow-lg py-2 ${burgerClass} flex-col flex font-bold items-end sm:p-0 sm:relative sm:top-0 sm:right-0 sm:flex-row sm:shadow-none sm:items-center sm:text-white sm:w-fit sm:flex`}
        >
          <li className={`${linkStyle}`}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={`${linkStyle}`}>
            <Link href={"/services"}>Services</Link>
          </li>
          <li className={`${linkStyle}`}>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li className={`${linkStyle}`}>
            <Link href={"/contact"}>Contact</Link>
          </li>
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
