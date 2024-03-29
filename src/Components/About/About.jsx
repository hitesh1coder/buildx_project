import React from "react";
import sideImage from "../../assets/images/wallpaper2.png";
import houseIcon from "../../assets/icons/hous_icon.png";
import buildIcon from "../../assets/icons/builder_icon.png";
import refubriseIcon from "../../assets/icons/refubrise_icon.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col lg:flex-row my-2">
      <motion.div
        initial={{ translateX: -50, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ type: "keyframes", duration: 1 }}
        viewport={{ once: true }}
        className="w-full lg:w-[50vw]"
      >
        <img
          className="w-full h-[40vh] md:h-[30vh] lg:h-full"
          src={sideImage}
          alt="side-image"
        />
      </motion.div>
      <motion.div
        initial={{ translateX: 50, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" w-full  lg:w-[50vw] flex flex-col gap-5 justify-center p-4 bg-[#F8F8F8]"
      >
        <div className="flex w-full md:w-[80%] gap-2 lg:w-[70%] p-3">
          <img src={buildIcon} alt="build" />
          <div className="">
            <h1 className="font-semibold text-[#FAB702]">GENERAL BUILDER</h1>
            <p className="text-sm text-[#6D7396] font-semibold text-justify">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-[80%] gap-2 lg:w-[70%] p-3">
          <img src={houseIcon} alt="house" />
          <div className="">
            <h1 className="font-semibold">HOUSE EXTENSIONS</h1>
            <p className="text-sm text-[#6D7396] font-semibold text-justify">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
        <div className="flex w-full md:w-[80%] gap-2 lg:w-[70%] p-3">
          <img src={refubriseIcon} alt="refubrise" />
          <div className="">
            <h1 className="font-semibold">REFURBISHMENT</h1>
            <p className="text-sm text-[#6D7396] font-semibold text-justify">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
