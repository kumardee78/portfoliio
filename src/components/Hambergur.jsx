function Hambergur({ isShown }) {
  return (
    <>
      <nav
        className={
          isShown
            ? "block bg-[#131f22] text-white text-center md:hidden  text-xl font-normal"
            : "hidden"
        }
      >
        <ul className="flex items-center justify-evenly">
          <li className="hover:bg-[#17262b] py-1">
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li className="hover:bg-[#17262b] py-1">
            <a href="#skils" className="hover:text-blue-500">
              Skills
            </a>
          </li>
          <li className="hover:bg-[#17262b] py-1">
            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>
            <li></li>
          </li>
        </ul>
        <p className=" py-2 mt-2">
          <a href="https://github.com/kumardee78" className="bg-blue-500 border border-blue-500 duration-200 rounded-lg px-2 py-1 text-white hover:bg-transparent hover:text-blue-500" target="_blank">
            Github Profile
          </a>
        </p>
      </nav>
    </>
  );
}

export default Hambergur;
