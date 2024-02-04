import React, { useState } from "react";

import emailIcon from "../../assets/icons/email_icon.png";
import contactIcon from "../../assets/icons/contact_icon.png";
import logo from "../../assets/icons/buildx_logo.png";
import searchIcon from "../../assets/icons/search_icon.png";
import menuIcon from "../../assets/icons/menu_icon.png";
import closeIcon from "../../assets/icons/close_icon.png";

const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);

  const handleToggle = () => {
    setToogleMenu((prev) => !prev);
  };
  return (
    <header className="w-full lg:h-[15vh] ">
      <div className="w-full lg:h-[6vh] bg-[#D9D9D9] flex justify-around items-center">
        <span className="text-xs md:text-sm text-[#696969]">
          Have any question?
        </span>
        <div className="flex gap:1 md:gap-3 lg:gap-5">
          <span className="text-sm text-[#696969] flex items-center gap-1">
            <img src={emailIcon} alt="email" className="w-3 h-3" />
            contact@mail.com
          </span>
          <span className="text-xs md:text-sm text-[#696969] flex items-center gap-1">
            <img src={contactIcon} alt="contact" className="w-3 h-3" />
            +080 0444 333 444
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-12">
        <nav className="flex h-12 w-full  justify-between items-center">
          <img src={logo} className="w-32" alt="buildx-logo" />
          <div
            className={`absolute left-0 ${
              toogleMenu ? "top-[12vh]" : "-top-full"
            }  bg-white/75  z-10  w-[100vw] transition-all duration-700 flex flex-col gap-6 items-center text-xl lg:static lg:row lg:justify-between lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row gap-3 my-2">
              <li className="font-semibold cursor-pointer text-[#F9B701]">
                About
              </li>
              <li className="font-semibold  hover:text-[#F9B701] cursor-pointer">
                Featured
              </li>
              <li className="font-semibold  hover:text-[#F9B701] cursor-pointer">
                Projects
              </li>
              <li className="font-semibold  hover:text-[#F9B701] cursor-pointer">
                Pages
              </li>
              <li className="font-semibold  hover:text-[#F9B701] cursor-pointer">
                Contact
              </li>
              <li className="font-semibold  hover:text-[#F9B701] cursor-pointer mt-1">
                <img src={searchIcon} alt="search" />
              </li>
            </ul>
          </div>
        </nav>
        <img
          className="w-8 lg:hidden"
          onClick={handleToggle}
          src={toogleMenu ? closeIcon : menuIcon}
          alt="menu"
        />
      </div>
    </header>
  );
};

export default Header;
