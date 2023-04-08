import React from "react";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";

const Header = () => {
  return (
    <header id="header" className="border-b-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-1">
          <p className="text-slate-500 select-none text-md">
            <i>Welcome to the HueTell Store!</i>
          </p>
          <div className="flex justify-center gap-4">
            <div className="text-slate-500 cursor-pointer flex justify-center items-center gap-2">
              <IoLocationOutline size={20} className="inline" />
              <p className="text-sm">Contact</p>
            </div>
            <div className="text-slate-500 cursor-pointer flex justify-center items-center gap-2">
              <FiInfo size={20} className="inline" />
              <p className="text-sm">Need Help</p>
            </div>
            <div className="text-slate-500 cursor-pointer flex justify-center items-center gap-2">
              <IoPersonOutline size={20} className="inline" />
              <p className="text-sm">Sign in / Register</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
