import React from "react";
import { ImagesData } from "../../Data/ImagesData";
import Carouserl from "../Carousel/Carouserl";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Carouserl slides={ImagesData} />
      </div>
      <div className="w-full h-[10vh] bg-[#FAB702] flex justify-around items-center px-1">
        <p className="text-white text-sx lg:text-sm">
          Consulting And Estimate For Your Project,
          <span className="text-black text-sx lg:text-sm underline italic font-semibold">
            Contact Us Today
          </span>
        </p>
        <button className="border-none outline-none lg:px-5 lg:py-2 bg-white text-[#FAB702] text-sm">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Banner;
