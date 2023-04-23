// import MenuIcon from '@mui/icons-material/Menu';
// import PersonIcon from '@mui/icons-material/Person';
// import HelpIcon from '@mui/icons-material/Help';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div className="bg-white shadow-lg sticky top-0  ">
      <div className="flex flex-col sm:flex-row sm:justify-between  sm:items-center max-w-[72rem] py-2 m-auto">
        <div className="md:flex items-center ">
          <p className="text-lg md:text-3xl md:py-2 px-4 font-ptsans font-bold ">
            Shop-It
          </p>
        </div>

        <div className="flex items-center  gap-x-4 w-full md:w-4/5 ">
          <div className=" w-full flex items-center h-10 gap-2 mx-2 ">
            <input
              type="text"
              placeholder="Products and categories"
              className="border border-neutral-300 rounded-lg p-1 sm:p-2 w-full "
            />
            <button className="hidden sm:flex bg-orange-600 text-white font-medium uppercase rounded-md p-2">
              Search
            </button>
          </div>
          <div className="hidden md:flex md:justify-between md:gap-x-4 text-lg md:items-center">
            <div className=" ">
              <p className="">
                Account
              </p>
            </div>
            <div className="">
              <p className="">
                help
              </p>
            </div>
            <div className="">
              <p className="">
                Cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* <PersonIcon className=''/> */}
{/* <KeyboardArrowDownIcon/> */}
{/* <HelpIcon className=''/> */}
{/* <KeyboardArrowDownIcon/> */}
{/* <ShoppingCartIcon className=''/> */}
{/* <KeyboardArrowDownIcon/>  */}

//           {/* <MenuIcon className='font-black text-2xl md:hidden'/> */}


export default Header;
