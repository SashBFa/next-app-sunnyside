import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image src={"/images/logo.svg"} alt="logo" width={124} height={24} />
    </nav>
  );
};

export default Navbar;
