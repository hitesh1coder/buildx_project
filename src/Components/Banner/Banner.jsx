import React from "react";
import { ImagesData } from "../../Data/ImagesData";
import Carouserl from "../Carousel/Carouserl";

const Banner = () => {
  return (
    <div className="w-full h-[85vh]">
      <div className="w-full h-[75vh]">
        <Carouserl slides={ImagesData} />
      </div>
      <div className="w-full h-[10vh] bg-[#FAB702] flex justify-around items-center">
        <p className="text-white">
          Consulting And Estimate For Your Project,
          <span className="text-black underline italic font-semibold">
            Contact Us Today
          </span>
        </p>
        <button className="border-none outline-none px-5 py-2 bg-white text-[#FAB702] text-sm">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default Banner;
