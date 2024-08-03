import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [isShown, setIsShown] = useState(false);

  function handleToggleDiv() {
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
    console.log(isShown);
  }

  return (
    <div className="bg-[#131f22]">
      <div className=" flex items-center justify-between lg:px-16 px-8 py-4  text-white font-bold">
        <h1 className=" lg:text-6xl text-5xl font-bold text-yellow-100">DK</h1>
        <nav className="md:block hidden md:flex justify-center items-center">
          <ul className="flex justify-center items-center gap-8 lg:text-2xl text-xl font-normal">
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 hover:border-b hover:border-b-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-500 hover:border-b hover:border-b-blue-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 hover:border-b hover:border-b-blue-500"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-xl text-blue-600 md:block hidden py-2 border  px-4 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white hover:border-500 duration-200">
          <a href="https://github.com/kumardee78" target="_blank">
            Github Profile
          </a>
        </p>
        <div className="md:hidden visible text-2xl py-[0.3rem] px-[0.5rem] border">
          <FaBars onClick={handleToggleDiv} />
        </div>
      </div>
      <nav
        className={
          isShown
            ? "block bg-transparent text-white text-center md:hidden  text-xl font-normal"
            : "hidden"
        }
      >
        <ul className="flex flex-col items-center justify-evenly">
          <li className="hover:bg-[#17262b] py-1">
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li className="hover:bg-[#17262b] py-1">
            <a href="#skils" className="hover:text-blue-500">
              Skills
            </a>
          </li>
          <li className="hover:bg-[#17262b] py-1">
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
           
          </li> 
          <li className="my-2"><a
            href="https://github.com/kumardee78"
            className="bg-blue-500 border border-blue-500 duration-200 px-2 py-1 text-white hover:bg-transparent hover:text-blue-500 "
            target="_blank"
          >
            Github Profile
          </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
