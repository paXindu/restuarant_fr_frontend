import React, { useState } from "react";
import logo from "./logo.png";

export default function Navbar() {
  const NavLink = () => {
    return (
      <ul className="mr-16 mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-lg">
        <li>
          <a href="#" className="rounded-lg p-1 hover:bg-[#ffca40]">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="rounded-lg p-1 hover:bg-[#ffca40]">
            Gallery
          </a>
        </li>
        <li>
          <a href="#" className="rounded-lg p-1 hover:bg-[#ffca40]">
            Contact
          </a>
        </li>
      </ul>
    );
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  flex bg-black/20 ">
      <div className=" flex w-screen  p-3 font-Gilroy-Bold sm:items-center sm:justify-between">
        <a href="/" className="flex  sm:items-center">
          <img src={logo} className="ml-10 h-12 rounded-xl  " alt="Logo" />
        </a>

        <div className="hidden justify-between md:flex">
          <NavLink />
        </div>
        <div className="ml-[155px] mt-[11px] sm:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <h1>X</h1> : <h1>Menu</h1>}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center">
            <NavLink />
          </div>
        )}
      </div>
    </nav>
  );
}
