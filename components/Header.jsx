import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {

  return (
    <div className="bg-white">
      <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 p-2 items-center'>
        <div className='flex items-center '>
          <MenuIcon className='font-black text-2xl md:hidden'/>
          <p className='text-2xl md:text-3xl  font-ptsans font-bold '>Shop-It</p>
        </div>
        <div className='col-span-3 md:col-span-1 flex mr-2 items-center h-10 gap-2 mt-1'>
          <input type="text" placeholder='Search Products, and categories' className='border border-slate-400 rounded-md p-1 sm:p-2 w-full ' />
          <button className='hidden sm:block bg-orange-600 text-white font-medium uppercase rounded-md p-2' >Search</button>
        </div>
        {/* className='bg-orange-600 text-white font-medium uppercase rounded-md ' */}
        <div className='col-start-2 col-end-3 row-start-1 row-end-1 md:col-start-3 flex justify-end gap-4 items-center'>
          <div className='flex ml-8 items-center gap-1 '>
            <PersonIcon className=''/>
            <p className='hidden md:flex'>Account <KeyboardArrowDownIcon/> </p>
          </div>
          <div className='md:flex  md:items-center gap-1  hidden '>
            <HelpIcon className=''/>
            <p className='hidden md:flex'>help<KeyboardArrowDownIcon/> </p>
          </div>
          <div className='flex  '>
            <ShoppingCartIcon className=''/>
            <p className='hidden md:flex'>Cart <KeyboardArrowDownIcon/> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
