import React, { useEffect, useState } from "react";
import leftIocn from "../../assets/icons/left_icon (1).png";
import rightIocn from "../../assets/icons/right_icon.png";

const Carouserl = ({ slides }) => {
  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    setCurrSlide(currSlide ? currSlide - 1 : slides.length - 1);
  };
  const nextSlide = () => {
    setCurrSlide((prev) => (prev + 1) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="overflow-hidden relative md:h-96 lg:h-96">
      <div className="flex">
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <img
              className="transition-transform ease-out duration-700 relative brightness-50"
              style={{
                transform: `translateX(-${currSlide * 100}%)`,
              }}
              src={slide.image}
              alt={slide.title}
            />
            <div
              className={`absolute top-2 lg:top-15 left-5 lg:left-40 w-full h-full flex flex-col justify-center transition-transform ease-out duration-700`}
            >
              <h1
                className={` w-[80vw] md:w-[50vw] lg:w-[35vw] text-xl lg:text-5xl uppercase font-extrabold text-[#fff] ${
                  currSlide == index ? "block" : "hidden"
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`w-[90vw] md:w-[50vw] lg:w-[35vw] text-xs lg:text-sm font-extrabold text-[#fff] ${
                  currSlide == index ? "block" : "hidden"
                }`}
              >
                {slide.content}
              </p>
              <button
                className={`w-20 lg:w-28 border-none outline-none lg:px-5 lg:py-1 bg-[#FAB702] text-white text-xs lg:text-sm  ${
                  currSlide == index ? "block" : "hidden"
                }`}
              >
                Expoler Now
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2 lg:p-4">
        <button onClick={prevSlide}>
          <img
            className="bg-white rounded-full p-1"
            style={{ width: "1.5rem" }}
            src={leftIocn}
            alt="left_icon"
          />
        </button>
        <button onClick={nextSlide}>
          <img
            className="bg-white rounded-full p-1"
            style={{ width: "1.5rem" }}
            src={rightIocn}
            alt="right_icon"
          />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrSlide(index)}
              className={`w-2 h-2 border-2 border-[#FAB702] rounded-full transition-all cursor-pointer ${
                currSlide == index ? "p-1 bg-[#FAB702]" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carouserl;
