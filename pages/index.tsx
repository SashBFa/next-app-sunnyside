import HomeClient from "../components/home/HomeClient";
import HomeGrid from "../components/home/HomeGrid";
import HomeLittleGrid from "../components/home/HomeLittleGrid";
import Parallax from "../components/Parallax";

const index = () => {
  return (
    <>
      <header className="block lg:hidden">
        <Parallax page={"index"} />
      </header>
      <header className="hidden lg:block">
        <Parallax page={"index2"} />
      </header>
      <HomeGrid />
      <HomeClient />
      <HomeLittleGrid />
    </>
  );
};

export default index;
