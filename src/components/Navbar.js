import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
 

  const navLinks = [{ name: "Home" }, { name: "Create" }];
  return (
    <div className="mx-auto flex justify-between items-center max-w-4xl xl:max-w-6xl">
      <Link to="/">
        <h3 className="font-bold">Store Ecommerce</h3>
      </Link>
      <div className="flex flex-row items-center space-x-16">
        <ul className="hidden items-center flex-row md:flex">
          {navLinks.map((navLink, i) => (
            <li
              className="p-4 text-lg font-semibold hover:text-[#2596be] text-[#16162E] active:text-[#2596be] transition duration-500 focus:text-[#2596be]"
              key={i}
            >
              <Link
                to={
                  navLink.name === "Home"
                    ? `/`
                    : `${
                        navLink.name.charAt(0).toLowerCase() +
                        navLink.name.slice(1)
                      }`
                }
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      {/* Mobile Nav Bar */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? " flex flex-col items-center fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <Link to="/">
        <h3 className="font-bold">Store Ecommerce</h3>
        </Link>
        {navLinks.map((navLink, i) => (
          <li
            className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]"
            key={i}
          >
            <Link
              to={
                navLink.name === "Home"
                  ? `/`
                  : `${
                      navLink.name.charAt(0).toLowerCase() +
                      navLink.name.slice(1)
                    }`
              }
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;