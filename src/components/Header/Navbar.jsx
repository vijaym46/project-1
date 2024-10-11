import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import { CiSearch } from 'react-icons/ci';
import { GrFavorite } from 'react-icons/gr';

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
            className="w-32 sm:w-36 cursor-pointer"
          />
        </Link>

        {/* --- 2 --- */}
        <form className='block bg-gray-50 text-center border border-gray-400 mx-3 items-center justify-center  w-2/3 custom-991:w-1/2 relative rounded-full'>
          <div className='relative flex'>
              <input className='w-full sm:w-11/12 px-4 py-2 bg-gray-50 outline-none rounded-full' type="text" placeholder='Search' />
              <button className='absolute h-full right-1 top-1/2 -translate-y-1/2 px-4 hidden sm:block'>
                  <CiSearch className='w-6 h-6'/>
              </button> 
          </div>
        </form>

        {/* --- 3 --- */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 border-[0.1px] border-gray-200 border-spacing-1 px-3 py-1 rounded-sm">
            <GrFavorite />
            <span className="badge">0</span>
          </div>
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;