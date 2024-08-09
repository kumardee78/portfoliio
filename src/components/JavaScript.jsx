import React from "react";
import { useNavigate } from 'react-router-dom'


function JavaScript() {
  
  const navigate = useNavigate()
  
  return (
    <div className="md:px-10 mb-8 rounded-lg bg-[#131f22] py-6">
      <h1 className="text-xl bg-[#131f22] text-gray-400 font-semibold py-4 md:px-10 px-2 text-center">
        JavaScript
      </h1>
      <div className="projects-div flex flex-wrap justify-center gap-6 items-center">
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black hover:scale-105 duration-300">
          <div className="project rounded-lg h-full">
            <img
              src="download.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p className="image-para">
              <a
                href="https://github.com/kumardee78/simple-calculator.git"
                className="py-2 px-4 mb-2 rounded-lg bg-[#131f22]"
              >
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/simple-calculator/"
                className="py-2 px-4 mb-2 bg-[#131f22] rounded-lg "
              >
                VIew live Project
              </a>
              <p className="text-center md:text-3xl text-2xl py-2">
                Calculator
              </p>
            </p>
          </div>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black hover:scale-105 duration-300">
          <div className="project rounded-lg h-full">
            <img
              src="images.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p className="image-para">
              <a
                href="https://github.com/kumardee78/weatherApp.git"
                className="py-2 px-4 mb-2 rounded-lg bg-[#131f22]"
              >
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/weatherApp/"
                className="py-2 px-4 mb-2 bg-[#131f22] rounded-lg "
              >
                VIew live Project
              </a>
              <p className="text-center md:text-3xl text-2xl py-2">WeatherApp</p>
            </p>
          </div>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black hover:scale-105 duration-300">
          <div className="project rounded-lg h-full">
            <img
              src="wp12529001.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p className="image-para">
              <a
                href="https://github.com/kumardee78/crypto-project.git"
                className="py-2 px-4 mb-2 rounded-lg bg-[#131f22]"
              >
                View Code
              </a>
              <a
                href="https://kumardee78.github.io/crypto-project/"
                className="py-2 px-4 mb-2 bg-[#131f22] rounded-lg "
              >
                VIew live Project
              </a>
              <p className="text-center md:text-3xl text-2xl py-2">CryptoView</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaScript;
