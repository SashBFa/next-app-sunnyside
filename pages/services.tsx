import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import Parallax from "../components/Parallax";
import ServiceDo from "../components/services/ServiceDo";

const Services = () => {
  return (
    <section>
      <Parallax page={"services"} />
      <div className="p-12 mb-12 flex flex-col items-center sm:flex-row sm:m-0 sm:p-8 lg:px-24 max-w-screen-xl xl:m-auto">
        <h3 className="text-center sm:text-left text-3xl font-bold px-12 sm:p-0 sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md mb-6">
          Optimize your digital communication
        </h3>
        <Grid
          container
          component={Paper}
          elevation={6}
          className="w-60 sm:w-80 lg:w-[40rem]"
        >
          <Image
            src="./images/serviceImg.jpg"
            alt="computeur"
            width={4000}
            height={6000}
          />
        </Grid>
      </div>
      <div className="bg-neutral-900">
        <ServiceDo />
      </div>
      <div className="p-12 flex flex-col items-center lg:flex-row-reverse sm:m-0 sm:p-8 lg:px-24 max-w-screen-xl xl:m-auto">
        <h3 className="text-center lg:text-right text-3xl font-bold px-12 sm:p-0 sm:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#90D4C5] to-[#19536B] drop-shadow-md mb-6">
          Your digital communication agency Sunnyside
        </h3>
        <div className="text-lg mt-6">
          <p>
            Do you want to gain notoriety? Attract new customers? Increase your
            turnover? All this, thanks to the web? Our digital communication
            agency helps you achieve your various web objectives, by creating
            for you a personalized and optimal digital presence, an effective
            website with an attractive web design and relevant natural
            referencing (SEO).
            <b>
              We also offer a tailor-made service for the management and
              production monitoring of your communication project.
            </b>
          </p>
          <p>
            Whether you are launching a new project and want to shout it from
            the rooftops, whether you want to boost your communication, or
            whether you dream of digital transformation every night, our
            results-oriented creative communication agency accompanies you and
            pushes your ideas to the top!
          </p>
          <p>
            Today,
            <b>
              your communication cannot be conceived without having identified
              your needs
            </b>
            and clearly defined your objectives. This is why, thanks to the
            appropriate means of action, we will seek the results you dream of
            by offering you our digital solutions.
          </p>
          <p>
            It is essential for us to understand you well in order to jointly
            define an
            <b> effective communication strategy</b> and the actions to be
            implemented. This allows us to make your project tangible, efficient
            and sustainable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
