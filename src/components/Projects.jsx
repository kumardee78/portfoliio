import React from "react";
import Html from "./Html";
import JavaScript from "./JavaScript";
import ReactJs from "./React";

function Projects() {
  return (
    <div id="projects" className="lg:px-16 md:px-10 px-6 bg-[#17262b] text-white md:py-28 py-16">
      <h1 className="text-center text-white font-bold border-t-8  md:w-[20rem] w-[12rem] mx-auto pt-4 md:text-5xl text-4xl mb-6 lg:mb-12">
        Projects
      </h1>
      <p className="text-white text-center text-3xl py-12">
        Here are some of my projects I worked on.
      </p>
      <Html />
      <JavaScript />
      <ReactJs />

      <p className="text-white text-center text-3xl py-12">
        Exciting new projects dropping soon – stay tuned!
      </p>
    </div>
  );
}

export default Projects;
