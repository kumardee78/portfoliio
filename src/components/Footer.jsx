import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-20 bg-[#17262b]">
      <h3 className="text-center text-blue-500 font-bold text-3xl ">
        Deepak Kumar
      </h3>
      <div className="flex items-center justify-center gap-6 mt-10">
        <a href="https://www.instagram.com/_kumardee_/?hl=en" target="_blank">
          <FaInstagram className="p-1 mb-2 hover:text-blue-500 text-5xl text-white duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-kumar-b64437274"
          target="_blank"
          className=""
        >
          <CiLinkedin className="p-1 mb-2 hover:text-blue-500 text-5xl text-white duration-300" />
        </a>
        <a href="https://github.com/kumardee78" target="_blank" className="">
          <FaGithub className="p-1 mb-2 hover:text-blue-500 text-5xl text-white duration-300" />
        </a>
      </div>
      <p className="text-center text-white font-semibold text-2xl py-8">
        &copy; 2024 Deepak Kumar All rights reserved
      </p>
    </div>
  );
}

export default Footer;
