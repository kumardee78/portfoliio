import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="md:py-20 py-10 bg-[#17262b]">
      <h3 className="text-center text-blue-500 font-bold text-3xl ">
        Deepak Kumar
      </h3>
      <div className="flex items-center justify-center gap-6 mt-10">
        <a href="https://www.instagram.com/_kumardee_/?hl=en" target="_blank">
          <FaInstagram className="p-1 mb-2 hover:text-blue-500 md:text-5xl text-4xl text-white duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-kumar-b64437274"
          target="_blank"
          className=""
        >
          <CiLinkedin className="p-1 mb-2 hover:text-blue-500 md:text-5xl text-4xl text-white duration-300" />
        </a>
        <a href="https://github.com/kumardee78" target="_blank" className="">
          <FaGithub className="p-1 mb-2 hover:text-blue-500 md:text-5xl text-4xl text-white duration-300" />
        </a>
      </div>
      <p className="text-center text-white font-semibold md:text-2xl md:py-8 py-4 md:px-0 px-3">
        &copy; 2024 Deepak Kumar All rights reserved
      </p>
    </div>
  );
}

export default Footer;
