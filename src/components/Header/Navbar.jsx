import React from 'react';
import logo from '../../assets/Stalbanslogo.png';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import { CiSearch } from 'react-icons/ci';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaTruckArrowRight } from 'react-icons/fa6';

const Navbar = () => {

  return (
    <nav className="border-b-[1px]">
      <SocialMedia />
      <div className="flex items-center justify-between pt-5 pb-4 font-medium px-5 sm:px-[2vw] md:px-[3vw] lg:px-[5vw]">

        {/* --- 1 --- */}
        <Link to="/" className='hidden custom-991:block'>
          <img
            src={logo}
            alt="brand-logo"
            className="w-32 sm:w-16 cursor-pointer"
          />
        </Link>

        {/* --- 2 --- */}
        <form className='block bg-gray-50 text-center border border-gray-400 mr-2 custom-991:mx-3 items-center justify-center w-2/5 sm:w-2/5 md:w-1/2 custom-991:w-2/6 relative rounded-full'>
          <div className='relative flex'>
              <input className='w-full sm:w-11/12 px-4 py-2 text-sm font-light bg-gray-50 outline-none rounded-full' type="search" placeholder='Search' />
              <button className='absolute h-full right-1 top-1/2 -translate-y-1/2 px-2 md:px-4 sm:block'>
                  <CiSearch className='w-6 h-6'/>
              </button> 
          </div>
        </form>

      <div className='flex gap-1 items-center'>
        <Link to='/cart' className="flex items-center sm:mr-2 group">
          <div className="flex items-center gap-1 sm:gap-2 sm:border-[0.1px] border-gray-200 border-spacing-1 px-1 sm:px-3 py-1 rounded-lg hover:bg-orange-500 duration-200">
            <FaCartArrowDown className='group-hover:text-neutral-100 duration-200 text-orange-500 text-xl sm:text-2xl'/>
            {/* <p><span className='hidden sm:inline'>Add To </span>Cart</p> */}
          </div>
          <span className='sm:hidden font-light px-1'>|</span>
        </Link>

        <Link to='/myorders' className="flex items-center group">
          <div className="flex items-center gap-1 sm:gap-2 sm:border-[0.1px] border-gray-200 border-spacing-1 px-1 sm:px-3 py-1 rounded-lg hover:bg-orange-500 duration-200">
            <FaTruckArrowRight className='group-hover:text-neutral-100 duration-200 text-orange-500 text-xl sm:text-2xl'/>
            {/* <p><span className='hidden sm:inline'>My </span>Orders</p> */}
          </div>  
        </Link>

        <div className='flex text-gray-700'>
          <Link to='/login' className='flex items-center hover:text-orange-400 px-2 font-medium'>
            <p>Login</p>
          </Link>
        </div>
      </div>

      </div>
    </nav>
  );
};

export default Navbar;