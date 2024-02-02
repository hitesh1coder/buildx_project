import React from "react";
import wallpaper from "../../assets/images/wallpaper_1.png";

const Banner = () => {
  return (
    <div className="w-full h-[85vh]">
      <div className="w-full h-[75vh]">
        <img className="h-[100%] w-full" src={wallpaper} alt="wallpaper" />
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
