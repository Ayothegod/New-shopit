// import MenuIcon from '@mui/icons-material/Menu';
// import PersonIcon from '@mui/icons-material/Person';
// import HelpIcon from '@mui/icons-material/Help';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
  return (
    <div className="bg-white shadow-lg sticky top-0  ">
      <div className="flex justify-between py-2 px-4 items-center max-w-[72rem] m-auto">
        <div className="md:flex items-center ">
          <p className="text-lg md:text-3xl  font-ptsans font-bold ">
            Shop-It
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 flex-row-reverse">
          <div className=" flex justify-between gap-2 items-center">
            <div className="flex  items-center gap-1 ">
              <p className="hidden md:flex">
                Account
              </p>
            </div>
            <div className="md:flex  md:items-center gap-1  hidden ">
              <p className="hidden md:flex">
                help
              </p>
            </div>
            <div className="flex  ">
              <p className="hidden md:flex">
                Cart
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40rem] flex items-center h-10 gap-2">
            <input
              type="text"
              placeholder="Search Products, and categories"
              className="border border-neutral-300 rounded-md p-1 sm:p-2 w-full "
            />
            <button className="hidden sm:block bg-orange-600 text-white font-medium uppercase rounded-md p-2">
              Search
            </button>
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
