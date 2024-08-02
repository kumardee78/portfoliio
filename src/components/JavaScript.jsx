import React from "react";

function JavaScript() {
  return (
    <div className="md:p-10 mb-8">
      <h1 className="text-xl bg-[#131f22] text-gray-400 font-semibold py-4 md:px-10 px-4 text-center" >
        JavaScript
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
              <a href="" className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                View Code
              </a>
              <a
                href=""
                className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                VIew live Project
              </a>
            </p>
          </div>
          <p className="text-center md:text-3xl text-2xl text-gray-400 py-2">Gradient-Color</p>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black border border-blue-600 hover:scale-105 duration-300">
          <div className="project rounded-ss-lg rounded-se-lg h-[80%]">
            <img
              src="download.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p>
              <a href="https://github.com/kumardee78/calculator.git" className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/calculator/"
                className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                VIew live Project
              </a>
            </p>
          </div>
          <p className="text-center text-2xl md:text-3xl text-gray-400 py-2">Calculator</p>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black border border-blue-600 hover:scale-105 duration-300">
          <div className="project rounded-ss-lg rounded-se-lg h-[80%]">
            <img
              src="images.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p>
              <a href="https://github.com/kumardee78/weatherApp.git" className="py-2 px-4 border hover:bg-blue-500 border-blue-500 rounded-lg mb-2 ">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/weatherApp/"
                className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                VIew live Project
              </a>
            </p>
          </div>
          <p className="text-center md:text-3xl text-2xl text-gray-400 py-2">WeatherApp</p>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black border border-blue-600 hover:scale-105 duration-300">
          <div className="project rounded-ss-lg rounded-se-lg h-[80%]">
            <img
              src="wp12529001.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p>
              <a href="https://github.com/kumardee78/crypto-project.git" className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/crypto-project/"
                className="py-2 px-4 border mb-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                VIew live Project
              </a>
            </p>
          </div>
          <p className="text-center md:text-3xl text-2xl text-gray-400 py-2">CryptoView</p>
        </div>
      </div>
    </div>
  );
}

export default JavaScript;
