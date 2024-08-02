function Header() {
  return (
    <div className="z-20 flex items-center justify-between lg:px-16 px-8 py-4 sticky top-0 bg-[#131f22] text-white font-bold ">
      <h1 className=" lg:text-5xl text-3xl p-2 font-bold text-red-600">DK</h1>
      <nav className="md:block hidden md:flex justify-center items-center">
        <ul className="flex justify-center items-center gap-8 lg:text-2xl text-xl font-normal">
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 hover:border-b hover:border-b-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skils"
              className="hover:text-blue-500 hover:border-b hover:border-b-blue-500"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 hover:border-b hover:border-b-blue-500"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-xl text-blue-600 md:block hidden py-2 border  px-4 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white hover:border-500 duration-200"><a href="https://github.com/kumardee78" target="_blank">Github Profile</a></p>
      
    </div>
  );
}

export default Header;
