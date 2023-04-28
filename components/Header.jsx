import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`bg-white shadow-lg sticky top-0 z-[999]`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between  sm:items-center max-w-[72rem] py-2 px-2 m-auto">
        <div className="flex items-center justify-between mb-2 sm:mb-0 ">
          <div className="flex  items-center gap-2">
            <div onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon className="md:hidden cursor-pointer" />
            </div>
            <p className="text-lg md:text-2xl md:py-2 font-russo font-extrabold ">
              Shop-It 
            </p>
          </div>
          <div className="flex sm:hidden gap-6 ">
            <div onClick={() => setOpen(!open)}>
              <PersonIcon className=" " />
              {open && (
                <div className="absolute top-24 right-4 py-4 px-6 rounded-md bg-white shadow-lg flex flex-col gap-y-1 w-48 ">
                  <h1 className="text-[#999]">
                    Hi{" "}
                    <span className="text-orange-600 font-semibold text-md ">
                      user
                    </span>
                  </h1>
                  <p className="text-xs text-[#999]">not signed in? </p>
                  <button className="text-white bg-orange-600 py-1 px-2 rounded-md border-none">
                    sign in
                  </button>
                </div>
              )}
            </div>
            <div>
              <ShoppingCartIcon className="" />
            </div>
          </div>
        </div>

        {/* {openMenu && (
          )} */}
        <section
          className={`fixed top-0 bottom-0 left-0 w-[60%] transition duration-500 ease-in-out bg-[#fff] md:hidden p-2 border-r border-r-neutral-300 ${
            openMenu ? " translate-x-[-100%]" : "translate-x-[0%]"
          }`}
        >
          <div className=" flex items-center border-b border-b-neutral-200 pb-2">
            <div onClick={() => setOpenMenu(!openMenu)}>
              <MenuIcon className="md:hidden cursor-pointer bg-white" />
            </div>
            <p className="text-xl font-bold ml-8">Shop-it</p>
          </div>
          <div className="py-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-bold text-lg text-orange-600">
                Products. =&gt;
              </h3>
              <ul className="flex flex-col gap-4 mt-2">
                <li>Shirts</li>
                <li>Watches</li>
                <li>Gown</li>
                <li>Shorts</li>
                <li>Caps/Hats</li>
                <li>Shoes - [sneakers, heels]</li>
              </ul>
            </div>
            <div className="mb-10 px-8 ">
              <button className=" bg-orange-600 mb-2 w-full flex py-2 px-4 rounded-md text-white font-semibold gap-2">
                <ShoppingCartIcon />
                Cart
              </button>
              <button className=" bg-black w-full flex py-2 px-4 rounded-md text-white font-semibold gap-2">
                <PersonIcon />
                Sign-in
              </button>
            </div>
          </div>
        </section>

        <div className="flex items-center  gap-x-4 w-full md:w-4/5 ">
          <div className=" w-full flex items-center h-10 gap-2">
            <input
              type="text"
              placeholder="Products and categories"
              className="border border-neutral-300 rounded-lg p-1 sm:p-2 w-full "
            />
            <button className="hidden sm:flex bg-orange-600 text-white font-medium uppercase rounded-md p-2">
              Search
            </button>
          </div>
          <div className="hidden md:flex md:justify-between md:gap-x-6 text-lg md:items-center">
            <div
              className="flex items-center gap-x-1 relative cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <PersonIcon className="" />
              <p className="">Account</p>
              <KeyboardArrowDownIcon />

              {open && (
                <div className="absolute top-14 py-4 px-6 rounded-md bg-white shadow-lg flex flex-col gap-y-1 w-48 ">
                  <h1 className="text-[#999]">
                    Hi{" "}
                    <span className="text-orange-600 font-semibold text-md ">
                      user
                    </span>
                  </h1>
                  <p className="text-xs text-[#999]">not signed in? </p>
                  <button className="text-white bg-orange-600 py-1 px-2 rounded-md border-none">
                    sign in
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center gap-x-1 cursor-pointer">
              <ShoppingCartIcon className="" />
              <p className="">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
