import React from "react";
import emailIcon from "../../assets/icons/email_icon.png";
import contactIcon from "../../assets/icons/contact_icon.png";
import logo from "../../assets/icons/buildx_logo.png";
import searchIcon from "../../assets/icons/search_icon.png";

const Header = () => {
  return (
    <header className="w-full h-[15vh] ">
      <div className="w-full h-[6vh] bg-[#D9D9D9] flex justify-around items-center">
        <span className="text-sm text-[#696969]">Have any question?</span>
        <div className="flex gap-5">
          <span className="text-sm text-[#696969] flex items-center gap-1">
            <img src={emailIcon} alt="email" className="w-3 h-3" />
            contact@mail.com
          </span>
          <span className="text-sm text-[#696969] flex items-center gap-1">
            <img src={contactIcon} alt="contact" className="w-3 h-3" />
            +080 0444 333 444
          </span>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex  justify-center items-center">
          <img src={logo} alt="buildx-logo" />
        </div>
        <div className="flex justify-center items-center">
          <nav>
            <ul className="flex gap-5">
              <li className="font-semibold cursor-pointer text-[#F9B701]">
                About
              </li>
              <li className="font-semibold cursor-pointer">Featured</li>
              <li className="font-semibold cursor-pointer">Projects</li>
              <li className="font-semibold cursor-pointer">Pages</li>
              <li className="font-semibold cursor-pointer">Contact</li>
              <li className="font-semibold cursor-pointer mt-1">
                <img src={searchIcon} alt="search" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
