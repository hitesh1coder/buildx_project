import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-[6vh] bg-[#4C5B6D] flex justify-around items-center">
        <span className="text-sm text-[#D8DEFF]">&copy; DIGIWHIZ 2019</span>
        <div className="flex gap-5">
          <span className="text-sm text-[#696969] flex items-center gap-1">
            <ul className="flex gap-5">
              <li className="font-semibold text-[#D8DEFF] cursor-pointer">
                Home
              </li>
              <li className="font-semibold text-[#D8DEFF] cursor-pointer">
                About
              </li>
              <li className="font-semibold text-[#D8DEFF] cursor-pointer">
                Services
              </li>
              <li className="font-semibold text-[#D8DEFF] cursor-pointer">
                Portfolio
              </li>
              <li className="font-semibold text-[#D8DEFF] cursor-pointer">
                Blog
              </li>
              <li className="font-semibold text-[#D8DEFF] cursor-pointer">
                Contact
              </li>
            </ul>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
