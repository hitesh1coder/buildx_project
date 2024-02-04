import React, { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";

const Featured = () => {
  const categories = [
    "All",
    "Green Building",
    "Healthcare",
    "Interior Desgin",
    "Office",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="w-full h-full flex flex-col mt-36 lg:mt-10 px-2">
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <h1 className="uppercase text-2xl font-bold text-[#3B404F]">
          Featured Works
        </h1>
        <p className="lg:w-[50%] md:w-[80%] text-center text-[#6D7396]">
          Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus
          definiebas cum et. Duo id omnis persequeris neglegentur, facete
          commodo ea usu, possit lucilius sed ei. Esse efficiendi scripserit eos
          ex. Sea utamur iisque salutatus id.Mel autem animal.
        </p>
      </div>
      <div>
        <div className="flex w-full justify-center items-center gap:1 lg:gap-2 my-2">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(category)}
              className={`border-none outline-none px-1 md:p-1 lg:p-1 font-bold text-s ${
                category !== selectedCategory ? "text-black" : "text-[#F9B701]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ImageGallery selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Featured;
