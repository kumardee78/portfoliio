import React from "react";

function About() {
  return (
    <div
      className="md:flex lg:px-16 md:px-10 px-6 bg-[#17262b] text-white md:py-32 py-16"
      id="about"
    >
      <div className="lg:px-10 md:px-6 text-justify lg:text-2xl text-xl md:w-[65%] text-gray-400 grow">
        <h1 className="text-center text-white font-bold border-t-8  md:w-[20rem] w-[12rem] mx-auto pt-4 lg:text-5xl text-3xl mb-6 lg:mb-12">
          About Me
        </h1>
        <div className="md:w-[70%] mx-auto flex items-center xl:py-40 lg:py-20 py-12">
          <div className="w-full">
            <p className="pt-4">
              Hi, I'm Deepak Kumar, a passionate front-end developer with a
              knack for creating intuitive and responsive web interfaces., I
              have skills in HTML, CSS, and JavaScript. I'm proficient in
              frameworks like React and have a keen eye in creating
              user-friendly interfaces.
            </p>
            <p className="py-16">
              I'm driven by a love for coding and a passion for building
              seamless user experiences. I believe in continuous learning and am
              always exploring new technologies and methodologies to improve my
              craft.
            </p>
            <p className="text-center">
              <a
                href="public/Copy of Deepak Kumar.pdf"
                download
                className="hover:scale-105 rounded-3xl hover:bg-gradient-to-l from-yellow-700 to-yellow-100 py-2 md:px-8 text-white lg:text-3xl text-xl px-4 duration-200 border hover:border-yellow-600"
              >
                Check resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
