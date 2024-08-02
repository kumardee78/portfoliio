function Home() {
  return (
    <div
      id="home"
      className="lg:h-screen h-full relative md:py-20 py-12 px-1 bg-[#131f22] text-white flex items-center justify-center md:bg-[url('DSC_3674.png')] bg-no-repeat bg-right bg-fixed bg-contain"
    >
      <div className="md:flex items-center w-full pb-6">
        <div className="lg:pl-32 md:px-0 md:pt-0 pt-6 md:text-start text-center grow">
          <h3 className="lg:text-3xl md:text-2xl text-xl text-yellow-300 font-bold">
            Hello! I'm
          </h3>
          <h1 className="lg:text-8xl md:text-6xl text-[2.5rem] font-bold ">
            Deepak <span className="text-blue-500">Kumar</span>
          </h1>
          <p className="lg:text-3xl md:text-2xl text-xl md:mt-10 mt-6">
            - Frontend Developer
          </p>
          <p className="my-8">
            <a
              href="#contact"
              class=" md:text-2xl text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg border border-blue-600 md:py-2 py-1 px-4"
            >
              Contact
            </a>
          </p>
        </div>
        <div className="md:hidden block flex items-center justify-center px-10 md:px-0 md:py-0 py-4">
          <img
            src="DSC_3674.png"
            alt=""
            // width={300}
            className="shadow-2xl shadow-black h-[15rem] w-[15rem] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
