import React from "react";

function ReactJs() {
  return (
    <div className="md:px-10 mb-8 rounded-lg py-6">
      <h1 className="text-2xl bg-[#131f22] font-semibold text-gray-500 py-4 md:px-10 px-2 text-center">
        React
      </h1>
      <div className="projects-div flex flex-wrap justify-center gap-6 items-center">
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black hover:scale-105 duration-300">
          <div className="project rounded-lg h-full">
            <img
              src="FoodDeliveryimages.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p className="image-para">
              <a
                href="https://github.com/kumardee78/foodDelivery-App.git"
                className="py-2 px-4 mb-2 rounded-lg bg-[#131f22]"
              >
                View Code
              </a>
              <a
                href="https://food-delivery-app-psi-ruddy.vercel.app/"
                className="py-2 px-4 mb-2 bg-[#131f22] rounded-lg "
              >
                VIew live Project
              </a>
              <p className="text-center text-black md:text-3xl text-2xl py-2">
                Food-Delivery App
              </p>
            </p>
          </div>
        </div>
        <div className=" w-[20rem] h-[18rem] bg-[#131f22] rounded-lg my-4 shadow-lg shadow-black hover:scale-105 duration-300">
          <div className="project rounded-lg h-full">
            <img
              src="shoping app.jpg"
              alt=""
              className="w-full h-full block duration-300"
            />
            <p className="image-para">
              <a
                href="https://github.com/kumardee78/shopping-app.git"
                className="py-2 px-4 mb-2 rounded-lg bg-[#131f22]"
              >
                View Code
              </a>
              <a
                href="https://shopping-app-five-zeta.vercel.app/"
                className="py-2 px-4 mb-2 bg-[#131f22] rounded-lg "
              >
                VIew live Project
              </a>
              <p className="text-center text-black md:text-3xl text-2xl py-2">
                Shopping App
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactJs;
