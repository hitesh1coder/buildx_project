import React from "react";
import addIcon from "../../assets/icons/add_iocn.png";
import linkIcon from "../../assets/icons/link_icon.png";
import { ImagesData } from "../../Data/ImagesData";

const ImageGallery = ({ selectedCategory }) => {
  let filteredImages = ImagesData;

  if (selectedCategory !== "All") {
    filteredImages = ImagesData.filter(
      (img) => img.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  return (
    <div className="flex h-full p-1 items-center">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-72 w-[33rem]">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={image.image}
                alt={image.title}
              />
            </div>
            <div className="absolute h-[20%] w-full bg-white/80 flex items-center justify-center gap-2 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h1>ARCHITECTURE AND DESIGN</h1>
              <img src={addIcon} alt="add" />
              <img src={linkIcon} alt="link" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
