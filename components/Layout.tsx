import { useRef } from "react";
import { RespDimensions } from "./utils/AppContext";
import Dimensions from "./utils/Dimensions";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface layoutProps {
  colorTheme: { primary: string; secondary: string };
  children: any;
}

const pages: string[] = ["about", "contact", "projects", "services"];

const Layout = (props: layoutProps) => {
  const refDim = useRef<any>();
  const { dWidth } = Dimensions(refDim);

  return (
    <RespDimensions.Provider value={dWidth}>
      <Navbar logo={"/images/logo.svg"} color={""} pages={pages} />
      <main ref={refDim}>{props.children}</main>
      <Footer
        logo={"/images/logo2.svg"}
        colorTheme={props.colorTheme}
        pages={pages}
      />
    </RespDimensions.Provider>
  );
};

export default Layout;
