import React from "react";
import sideImage from "../../assets/images/wallpaper2.png";
import houseIcon from "../../assets/icons/hous_icon.png";
import buildIcon from "../../assets/icons/builder_icon.png";
import refubriseIcon from "../../assets/icons/refubrise_icon.png";

const About = () => {
  return (
    <div className="w-full h-[90vh] flex my-2">
      <div className="w-[50vw]">
        <img className="w-full h-full" src={sideImage} alt="side-image" />
      </div>
      <div className="w-[50vw] flex flex-col gap-4 justify-center p-4 bg-[#F8F8F8]">
        <div className="flex  gap- -500 w-[70%] p-3">
          <img src={buildIcon} alt="build" />
          <div className="">
            <h1 className="font-semibold text-[#FAB702]">GENERAL BUILDER</h1>
            <p className="text-sm text-[#6D7396] font-semibold text-justify">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
        <div className="flex  gap-3  w-[70%] p-3">
          <img src={houseIcon} alt="house" />
          <div className="">
            <h1 className="font-semibold">HOUSE EXTENSIONS</h1>
            <p className="text-sm text-[#6D7396] font-semibold text-justify">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-[70%] p-3">
          <img src={refubriseIcon} alt="refubrise" />
          <div className="">
            <h1 className="font-semibold">REFURBISHMENT</h1>
            <p className="text-sm text-[#6D7396] font-semibold text-justify">
              Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis
              persequeris neglegentur, facete commodo ea use possit lucilius.
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
