import Logo from "../assets/Group.svg";
import Menu from "../assets/menu 2.svg";
import Bg from "../assets/Rectangle 4.png";
export default function Navbar() {
  return (
    <div
      className=" z-50 bg-[#BD1F17] flex items-center justify-center lg:py-8 md:py-5 sm:py-5 py-5 mb-0"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="lg:w-[1320px] md:w-full sm:w-full w-full flex items-center justify-between px-[30px] lg:px-[30px] xl:px-0 2xl:px-0">
        <div className="flex lg:gap-[60px] sm:gap-5 md:gap-[30px] items-center lg:max-w-[970px] w-[640px]">
          <div className="flex items-center gap-[6px] lg:text-[28px] text-[28px] md:text-[14px] sm:text-[10px] text-white">
            <img src={Logo} alt="" />
            <h1>
              <span className="font-semibold">Restau</span>rant
            </h1>
          </div>
          <div className="">
            <ul
              className="lg:flex lg:gap-10 md:gap-5 sm:gap-3 sm:flex hidden md:flex lg:text-[15px] lg:font-medium sm:text-[8px] md:text-[12px] text-white"
              style={{ fontFamily: "Raleway" }}
            >
              <li className="cursor-pointer">
                <a>Home</a>
              </li>
              <li className="cursor-pointer">
                <a>About</a>
              </li>
              <li className="cursor-pointer">
                <a>Portfolio</a>
              </li>
              <li className="cursor-pointer">
                <a>Client</a>
              </li>
              <li className="cursor-pointer">
                <a>Blog</a>
              </li>
              <li className="cursor-pointer">
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="lg:py-[10px] md:py-[5px] sm:py-[2px] sm:px-[6px] md:px-[12px] lg:px-[24px] bg-[#FEBF00] text-[#0A1425] uppercase lg:text-base md:text-xs sm:text-[5px] lg:font-bold lg:block md:block sm:flex hidden"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Book a table
        </button>
        <div className=" lg:hidden md:hidden block sm:hidden relative">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden md:hidden sm:hidden block w-9 h-9"
            >
              <img src={Menu} className="w-9 h-9" alt="Menu" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-50
               mt-3 w-52 p-2 shadow text-white border-2 border-red-700 absolute right-1 bg-black"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
