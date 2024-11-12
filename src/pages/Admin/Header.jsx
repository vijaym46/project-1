import React, { useEffect, useRef, useState } from 'react'
import { TbMailFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import profile from '../../assets/Admin/profile.jpg'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  {/*  
    <section className="fixed top-0 left-64 w-[calc(100%-16rem)] h-16 flex items-center justify-between border-b bg-white z-10 px-5 py-2">*/}
  return (
    
    <section className="px-5 py-2 w-full h-16 flex items-center justify-between border-b">
    <input type="text" placeholder="Search..." className="border px-2 py-[7px] rounded focus:outline-none"/>
    <div className="flex items-center gap-1 relative text-neutral-500 text-lg">
      <button onClick={() => toggleDropdown(0)} className='px-3 py-3 relative hover:bg-neutral-100'>
        
      </button>
      {/* {
        <div
          className={`bg-[#151a2b] opacity-50 text-neutral-300 absolute transition-all duration-300 overflow-hidden ${
            activeDropdown === 0
              ? "max-h-40 opacity-100 px-6 pt-4 pb-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <h1>hrel</h1>
        </div>
      } */}
      <div className="relative" ref={dropdownRef}>
        <button 
          className="px-3 py-3 relative hover:bg-neutral-100 rounded" 
          onClick={() => toggleDropdown(1)} 
          aria-haspopup="true" 
          aria-expanded={activeDropdown}
        >
          <TbMailFilled />
        </button>
        
        {activeDropdown == 1 && (
          <div className="absolute z-50 right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setActiveDropdown(null)}>Latest</a>
            <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setActiveDropdown(null)}>Popularity</a>
            <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setActiveDropdown(null)}>Best Rating</a>
          </div>
        )}
      </div>

      <button className='px-3 py-3 hover:bg-neutral-100'>
        <FaBell />
      </button>
      <button className='px-3 py-3 hover:bg-neutral-100'>
        <IoLayers />
      </button>
      <div className="flex items-center gap-2">
        <img src={profile} alt="profile" className="size-8 rounded-full"/>
        <h2>Hi, <span className="text-black">Hizrian</span></h2>
      </div>
    </div>
  </section>
  )
}

export default Header
