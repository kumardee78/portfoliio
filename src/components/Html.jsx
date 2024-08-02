import React from "react";
import "../App.css";

function Html() {
  return (
    <div className="md:px-10">
      <h1 className="text-xl bg-[#131f22] text-gray-400 font-semibold py-4 md:px-10 px-2 text-center">
        Html, Css and TailwindCSS
      </h1>
      <div className="projects-div flex flex-wrap justify-center gap-6 items-center">
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black border border-blue-600 hover:scale-105 duration-300">
          <div className="project rounded-ss-lg rounded-se-lg h-[80%] ">
            <img
              src="intro-office.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p>
              <a href="https://github.com/kumardee78/majorProject-Aria.git" className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/majorProject-Aria/"
                className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                VIew live Project
              </a>
            </p>
          </div>
          <p className="text-center md:text-3xl text-2xl text-gray-400 py-2">Aria</p>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black border border-blue-600 hover:scale-105 duration-300">
          <div className="project rounded-ss-lg rounded-se-lg h-[80%]">
            <img
              src="pullup.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p>
              <a href="https://github.com/kumardee78/gym-november-using-tailwind.git" className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/gym-november-using-tailwind/"
                className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                VIew live Project
              </a>
            </p>
          </div>
          <p className="text-center md:text-3xl text-2xl text-gray-400 py-2">Gym</p>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black border border-blue-600 hover:scale-105 duration-300">
          <div className="project rounded-ss-lg rounded-se-lg h-[80%]">
            <img
              src="download.webp"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p>
              <a href="https://github.com/kumardee78/loreal.git" className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/loreal/"
                className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                VIew live Project
              </a>
            </p>
          </div>
          <p className="text-center md:text-3xl text-2xl text-gray-400 py-2">Loreal</p>
        </div>
      </div>
    </div>
  );
}

export default Html;
