import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";

function Skills() {
  return (
    <>
      <div className="lg:px-16 md:px-10 bg-[#131F22] md:py-28 py-16" id="skils">
        <h1 className="text-center md:text-5xl text-4xl w-[12rem] mx-auto border-t-[0.5rem] pt-4 font-bold text-white">
          Skills
        </h1>
        <p className="text-white text-center md:text-3xl text-2xl py-12 px-4">
          Here are some of my skills on which i have been working
        </p>
        <div className="flex justify-center items-center flex-wrap gap-6 mt-10 mb-10">
          <div className="rounded-md shadow-lg shadow-black bg-[#233023] hover:bg-yellow-500 hover:font-semibold duration-300 text-white w-[10rem] h-[10rem] text-center flex justify-center items-center">
            <div className="">
              <p className="flex justify-center text-7xl text-white mb-4">
                <FaHtml5 />
              </p>
              <h3 className="text-2xl">HTML</h3>
            </div>
          </div>
          <div className="rounded-md shadow-lg shadow-black bg-[#233023] hover:bg-yellow-500 hover:font-semibold duration-300 text-white w-[10rem] h-[10rem] text-center flex justify-center items-center">
            <div className="">
              <p className="flex justify-center text-7xl text-white mb-4">
                <FaCss3Alt />
              </p>
              <h3 className="text-2xl">CSS</h3>
            </div>
          </div>
          <div className="rounded-md shadow-lg shadow-black bg-[#233023] hover:bg-yellow-500 hover:font-semibold duration-300 text-white w-[10rem] h-[10rem] text-center flex justify-center items-center">
            <div className="">
              <p className="flex justify-center text-7xl text-white mb-4">
                <SiTailwindcss />
              </p>
              <h3 className="text-2xl">Tailwind</h3>
            </div>
          </div>
          <div className="rounded-md shadow-lg shadow-black bg-[#233023] hover:bg-yellow-500 hover:font-semibold duration-300 text-white w-[10rem] h-[10rem] text-center flex justify-center items-center">
            <div className="">
              <p className="flex justify-center text-7xl text-white mb-4">
                <DiJavascript />
              </p>
              <h3 className="text-2xl">JavaScript</h3>
            </div>
          </div>
          <div className="rounded-md shadow-lg shadow-black bg-[#233023] hover:bg-yellow-500 hover:font-semibold duration-300 text-white w-[10rem] h-[10rem] text-center flex justify-center items-center">
            <div className="">
              <p className="flex justify-center text-7xl text-white mb-4">
                <FaReact />
              </p>
              <h3 className="text-2xl">React</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
