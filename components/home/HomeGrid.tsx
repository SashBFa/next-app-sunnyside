import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { RespDimensions } from "../utils/AppContext";

const HomeGrid = () => {
  const dWidth = useContext(RespDimensions);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto">
      <article className="sm:order-1 lg:order-2">
        <div className="block sm:hidden">
          <Image
            src="./images/mobile/image-transform.jpg"
            alt="img1"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="hidden sm:block sm:max-w-xl sm:mx-auto lg:max-w-none">
          <Image
            src="./images/desktop/image-transform.jpg"
            alt="img1"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </article>
      <motion.article
        className="sm:order-2 lg:order-1 p-6 sm:p-24 flex flex-col items-center lg:items-start sm:justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <h4 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 lg:text-left">
          Transform your brand
        </h4>
        <p className="text-gray-500 text-center font-medium my-6 lg:text-left sm:text-xl">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button className=" transition-all duration-500 ease-in-out uppercase font-bold text-gray-800 border-b-4 border-rose-400 m-2 hover:bg-rose-400 hover:p-2 hover:rounded-2xl hover:border-0 hover:m-0.5 sm:text-2xl">
          Learn more
        </button>
      </motion.article>
      <article className="sm:order-3">
        <div className="block sm:hidden">
          <Image
            src="./images/mobile/image-stand-out.jpg"
            alt="img2"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className="hidden sm:block sm:max-w-xl sm:mx-auto lg:max-w-none">
          <Image
            src="./images/desktop/image-stand-out.jpg"
            alt="img2"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </article>
      <motion.article
        className="sm:order-4 p-6 sm:p-24 flex flex-col items-center lg:items-start sm:justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <h4 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 lg:text-left">
          Stand out to the right audience
        </h4>
        <p className="text-gray-500 text-center font-medium my-6 lg:text-left sm:text-xl">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we will build and
          extend your brand in digital places.
        </p>
        <button className=" transition-all duration-500 ease-in-out uppercase font-bold text-gray-800 border-b-4 border-amber-400 m-2 hover:bg-amber-400 hover:p-2 hover:rounded-2xl hover:border-0 hover:m-0.5 sm:text-2xl">
          Learn more
        </button>
      </motion.article>
      <article
        className="sm:order-5 min-h-screen p-6 flex flex-col justify-end sm:p-24"
        style={{
          background:
            dWidth < 700
              ? "url(./images/mobile/image-graphic-design.jpg) center/cover"
              : "url(./images/desktop/image-graphic-design.jpg) center/cover",
        }}
      >
        <h4 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-6">
          Graphic Design
        </h4>
        <p className="text-gray-500 text-center font-medium sm:text-xl">
          Great design makes you memorable. We deliver artwork that underscores
          you brand message and captures potential clients attention.
        </p>
      </article>
      <article
        className="sm:order-6 min-h-screen p-6 flex flex-col justify-end sm:p-24 "
        style={{
          background:
            dWidth < 700
              ? "url(./images/mobile/image-photography.jpg) center/cover"
              : "url(./images/desktop/image-photography.jpg) center/cover",
        }}
      >
        <h4 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-6">
          Photography
        </h4>
        <p className="text-gray-500 text-center font-medium sm:text-xl">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </article>
    </section>
  );
};

export default HomeGrid;
