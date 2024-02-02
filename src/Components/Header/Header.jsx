import React from "react";
import emailIcon from "../../assets/icons/email_icon.png";
import contactIcon from "../../assets/icons/contact_icon.png";

const Header = () => {
  return (
    <header className="w-full h-[15vh] border-solid border-2 border-sky-500">
      <div className="w-full h-[5vh] bg-[#D9D9D9] flex justify-around items-center">
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
      <div></div>
    </header>
  );
};

export default Header;
