import Logo from "../assets/Group.svg";
import Menu from "../assets/menu 2.svg";
export default function Navbar() {
  return (
    <div className="static">
      <div className="navbar flex items-center justify-center lg:py-8 py-5 ">
        <div className=" flex lg:items-end lg:justify-end w-full sm:w-auto md:w-auto md:justify-between md:flex-row-reverse lg:w-auto justify-between flex-row-reverse">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden md:hidden sm:hidden"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg> */}
              <img src={Menu} className="w-9 h-9" alt="Menu" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white border-2 border-red-700 absolute right-1 bg-black"
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
          <a
            className="flex gap-[6px] lg:text-[28px] text-[28px] md:text-[14px] sm:text-[10px] font-normal items-center text-white "
            style={{ fontFamily: "Poppins" }}
          >
            <img
              src={Logo}
              className="lg:w-9 lg:h-9 md:w-5 md:h-5 sm:w-5 sm:h-5 w-9 h-9"
              alt="Logo"
            />{" "}
            <h1>
              <span className="font-semibold">Restau</span>rant
            </h1>
          </a>
        </div>
        <div className="navbar-center hidden sm:flex md:flex lg:flex lg:pr-[417px] md:pr-[180px] sm:pr-[90px] sm:pl-[15px] lg:pl-[60px] md:pl-[30px] ">
          <ul
            className="flex lg:gap-10 md:gap-5 sm:gap-2  lg:text-[15px] lg:font-medium text-white md:font-normal sm:font-light sm:text-[8px] md:text-[12px]"
            style={{ fontFamily: "Raleway, sans-serif" }}
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
        <button
          className="lg:py-[10px] md:py-[5px] sm:py-[2px] sm:px-[6px] md:px-[12px] lg:px-[24px] bg-[#FEBF00] text-[#0A1425] uppercase lg:text-base md:text-xs sm:text-[5px] lg:font-bold lg:block hidden md:block sm:block"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Book a table
        </button>
      </div>
    </div>
  );
}
