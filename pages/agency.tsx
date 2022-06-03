import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import { Grid, Paper } from "@mui/material";
import AgencyExpert from "../components/agency/AgencyExpert";

const Agency = () => {
  return (
    <section>
      <div className="relative">
        <ParallaxProvider>
          <ParallaxBanner
            layers={[{ image: "./images/aboutImg.jpg", speed: -30 }]}
            className="aspect-[2/1]  h-96 sm:h-[41rem] lg:h-screen"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-7xl lg:text-9xl drop-shadow-md text-white text-center font-bold">
              Fewer rules more fun!
            </h1>
          </div>
        </ParallaxProvider>
      </div>
      <div className="p-12 flex flex-col items-center sm:flex-row-reverse sm:m-0 sm:p-8 lg:px-24 max-w-screen-xl xl:m-auto">
        <div className="sm:w-2/4 lg:w-4/5">
          <h3 className="text-center sm:text-right text-3xl font-bold px-12 sm:p-0 sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md mb-6">
            YOUR CREATIVE DIGITAL WEB AGENCY
          </h3>
          <div className="text-lg my-6 sm:text-right sm:ml-12">
            <p>
              <b>Sunnyside</b> is a <b>creative digital web agency</b>{" "}
              specializing in the creation of websites, e-commerce and digital
              marketing.
            </p>
            <p>
              With more than 15 years of experience in the field, the Sunnyside
              team puts its expertise at your service. We take the time to
              listen to you in order to offer you
              <b> complete and tailor-made web solutions.</b>
            </p>
          </div>
        </div>
        <Grid
          container
          component={Paper}
          elevation={6}
          className="w-60 sm:w-80 lg:w-[40rem] "
        >
          <Image
            src="./images/agencyImg.jpg"
            alt="computeur"
            width={4000}
            height={6000}
          />
        </Grid>
      </div>
      <div className="bg-neutral-900">
        <AgencyExpert />
      </div>
    </section>
  );
};

export default Agency;
