import React from "react";
import "../App.css";

function Html() {
  return (
    <div className="md:px-10 mb-8 rounded-lg py-6">
      <h1 className="text-xl w-[16rem] mx-auto bg-[#131f22] text-gray-400 font-semibold py-4 md:px-10 px-2 mb-4 text-center">
        Html, Css and TailwindCSS
      </h1>
      <div className="projects-div flex flex-wrap justify-center gap-6 items-center">
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black hover:scale-105 duration-300">
          <div className="project rounded-lg h-full">
            <img
              src="intro-office.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p className="image-para">
              <a href="https://github.com/kumardee78/majorProject-Aria.git" className="py-2 px-4 mb-2 rounded-lg bg-[#131f22]">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/majorProject-Aria/"
                className="py-2 px-4 mb-2 bg-[#131f22] rounded-lg "
              >
                VIew live Project
              </a>
              <p className="text-center md:text-3xl text-2xl text-[] py-2">Aria</p>
            </p>
            
          </div>
          
        </div>
        
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black hover:scale-105 duration-300">
          <div className="project rounded-lg h-full">
            <img
              src="download.webp"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p className="image-para">
              <a href="https://github.com/kumardee78/loreal.git" className="py-2 px-4 mb-2 rounded-lg bg-[#131f22]">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/loreal/"
                className="py-2 px-4 mb-2 bg-[#131f22] rounded-lg "
              >
                VIew live Project
              </a>
              <p className="text-center md:text-3xl text-2xl py-2">Loreal</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Html;
