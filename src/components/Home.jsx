import React from "react";

function Home() {
  return (
    <div className="bg-[#131f22] flex items-center justify-center py-24 md:px-12">
      <div className="w-full pb-6">
        <div className="mb-10 px-4 flex items-center justify-center">
          <img
            src="DSC_3674.png"
            alt=""
            className="rounded-full border-4 border-[#17262b] w-[15rem]"
          />
        </div>
        <div className="text-center text-white mt-3">
          <h3 className="md:text-3xl text-xl text-yellow-200 font-bold">
            Hello! I'm
          </h3>
          <h1 className="md:text-8xl text-5xl font-bold text-white">
            Deepak <span className="text-blue-500">Kumar</span>
          </h1>
          <p className="md:text-3xl text-xl md:mt-10 mt-6">
            - Frontend Developer
          </p>
          <p className="my-12">
            <a
              href="#contact"
              class="text-2xl text-yellow-100 hover:text-[#17262b] hover:bg-yellow-100 border border-yellow-100 md:py-2 py-1 px-4 duration-300"
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
