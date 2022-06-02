import { useRef } from "react";
import { RespDimensions } from "./AppContext";
import Dimensions from "./Dimensions";
import Navbar from "./Navbar";

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
    </RespDimensions.Provider>
  );
};

export default Layout;
