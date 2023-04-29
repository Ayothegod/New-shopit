import {GiHamburgerMenu} from "react-icons/gi"
import {BsFillPersonFill,BiHelpCircle} from "react-icons/bs";
import {FaCartArrowDown,FaCartPlus } from "react-icons/fa";
import {AiOutlineDown} from "react-icons/ai";
import {MdOutlineArrowForward, MdOutlineClose} from 'react-icons/md';
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);


  return (
    <div className={`bg-white shadow-lg sticky top-0 z-[999]`}>

      <div className="flex flex-col sm:flex-row sm:justify-between  sm:items-center max-w-[72rem] py-2 px-2 m-auto">

        {/* header logo and mobile icons */}
        <div className="flex items-center justify-between mb-2 sm:mb-0 ">
          <div className="flex  items-center gap-2">
            <div onClick={() => setOpenMenu(!openMenu)}>
              <GiHamburgerMenu className="md:hidden cursor-pointer" />
            </div>
            <p className="text-lg md:text-2xl md:py-2 font-russo font-extrabold ">
              Shop-It 
            </p>
          </div>

          {/* mobile icons on header */}
          <div className="flex sm:hidden gap-6 ">
            <div onClick={() => setOpen(!open)}>
              <BsFillPersonFill className=" " />
              {open && (
                <div className="absolute top-24 right-4 py-4 px-6 rounded-md bg-white shadow-lg flex flex-col gap-y-1 w-48 ">
                  <h1 className="text-[#999]">
                    Hi{" "}
                    <span className="text-black font-semibold text-md ">
                      user
                    </span>
                  </h1>
                  <p className="text-xs text-[#999]">not signed in? </p>
                  <button className="text-white bg-black py-1 px-2 rounded-md border-none">
                    sign in
                  </button>
                </div>
              )}
            </div>
            <div>
              <FaCartPlus className="" />
            </div>
          </div>
        </div>

        {/* desktop search and icons on header */}
        <div className="flex items-center  gap-x-4 w-full md:w-4/5 ">
          <div className=" w-full flex items-center h-10 gap-2">
            <input
              type="text"
              placeholder="Products and categories"
              className="border border-neutral-300 rounded-md p-1 sm:p-2 w-full "
            />
            <button className="hidden sm:flex bg-neutral-700 text-white font-medium uppercase rounded-md p-2">
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
              <FaCartArrowDown />

              {open && (
                <div className="absolute top-14 py-4 px-6 rounded-md bg-white shadow-lg flex flex-col gap-y-1 w-48 ">
                  <h1 className="text-[#999]">
                    Hi{" "}
                    <span className="text-neutral-800  font-semibold text-md ">
                      user
                    </span>
                  </h1>
                  <p className="text-xs text-[#999]">not signed in? </p>
                  <button className="text-white bg-neutral-800 py-1 px-2 rounded-md border-none">
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

        {/* mobile menu content */}
        <section
          className={`fixed top-0 bottom-0 left-0 w-[60%] transition duration-500 ease-in-out bg-[#fff] md:hidden p-2 border-r border-r-neutral-300 ${
            openMenu ? " translate-x-[-100%]" : "translate-x-[0%]"
          }`}
        >

          {/* mobile menu header */}
          <div className=" flex items-center border-b border-b-neutral-200 pb-2">
            <div onClick={() => setOpenMenu(!openMenu)}>
              <MdOutlineClose className="ml-2 cursor-pointer"/>
            </div>
            <p className="text-xl font-russo font-bold ml-8">Shop-it</p>
          </div>

          {/* mobile menu content */}
          <div className="py-6 px-2 sm:px-8 flex flex-col justify-between h-full font-roboto">
            <div>
              <h3 className="font-bold text-xl text-black">
                Products
              </h3>
              <ul className="flex flex-col gap-4 mt-2 font-medium text-lg">
                <li>Shirts</li>
                <li>Shorts</li>
                <li>Gown</li>
                <li>Watches</li>
                <li>Sunglasses</li>
                <li className="flex items-center gap-2">Shoes <MdOutlineArrowForward/> [sneakers, heels]</li>
              </ul>
            </div>

            {/* mobile menu sign and cart button */}
            <div className="mb-10 ">
              <button className="bg-white border-2 border-neutral-800 mb-2 w-full flex py-2 px-4 rounded-md text-black font-semibold gap-2 duration-200 ease-in hover:text-white hover:bg-black">
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

      
      </div>

    </div>
  );
};

export default Header;
