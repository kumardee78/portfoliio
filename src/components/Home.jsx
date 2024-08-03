import React from "react";

function Home() {
  return (
    <div className="bg-[#131f22]  md:py-36 py-16 md:px-12 md:bg-[url('DSC_3674.png')] bg-no-repeat bg-right bg-contain">
      <div className="md:flex items-center w-full pb-6">
        <div className="flex items-center justify-center mb-10 md:mb-0 md:hidden block px-4">
          <img
            src="DSC_3674.png"
            alt=""
            className="w-full rounded-full  border-4 border-[#17262b]"
          />
        </div>
        <div className="md:text-start text-center grow text-white md:pl-10">
          <h3 className="text-3xl text-yellow-100 font-bold">
            Hello! I'm
          </h3>
          <h1 className="lg:text-8xl text-7xl font-bold text-white">
            Deepak Kumar
          </h1>
          <p className="text-3xl md:mt-10 mt-6">
            - Frontend Developer
          </p>
          <p className="my-8">
            <a
              href="#contact"
              class="text-xl text-yellow-100 hover:text-[#17262b] hover:bg-yellow-100 rounded-lg border border-yellow-100 md:py-2 py-1 px-4 duration-300"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
