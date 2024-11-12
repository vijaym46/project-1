import React, { useState } from "react";
import logo from "../../assets/Admin/newlogo.png";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { FaHome, FaLayerGroup, FaThList, FaTable } from "react-icons/fa";
import { GrTransaction, GrFormView } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckOff } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";

const SideBar = () => {
  const [activeSideBar, setActiveSideBar] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  /* const [sideBarButton, setSideBarButton] = useState(true);
  const toggleButtonSideBar = () => {
    setSideBarButton((prevState) => !prevState)
  } */

  const toggleSideBar = () => {
    setActiveSideBar((prevState) => !prevState);
  }

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  {/* <section
        className={`fixed h-screen bg-[#1A2035] duration-200 shrink-0 z-10 ${activeSideBar ? "w-64 opacity-100" : "w-16 opacity-100"}`}
      > */}
  return (
    
      
      <section
        className={`h-auto bg-[#1A2035] duration-200 shrink-0 ${ activeSideBar
            ? "w-64 opacity-100"
            : "w-16 opacity-100"
        }`}
        style={{ position: 'relative'}}
      >
      <div className="mb-6 px-5 py-5 flex items-center justify-between">
        { activeSideBar && (
          <div>
            <img src={logo} alt="logo" className="w-36" />
          </div>
        ) }
          { activeSideBar ? (<CgMenuLeft className="rotate-180 text-2xl hover:bg-neutral-600 rounded-full text-white cursor-pointer" onClick={toggleSideBar}/>) : (<BsThreeDotsVertical className="text-2xl hover:bg-neutral-600 rounded-full text-white cursor-pointer" onClick={toggleSideBar}/>) }
      </div>

      <ul className="text-neutral-400">
        <li onClick={() => toggleDropdown(null)}>
          <Link className="group px-6 py-3 mb-4 hover:bg-[#151a2b] active:bg-[#151a2b] focus:bg-[#151a2b] focus:border-l-2 focus:border-[#6861CE] duration flex items-center gap-5">
            <FaHome className="group-focus:text-[#6861CE] text-base" />
            { activeSideBar && (
              <h2 className="font-medium group-focus:text-white text-[15px]">
                Dashboard
              </h2>
            )}
          </Link>
        </li>

        <li onClick={() => toggleDropdown(null)}>
          <Link className="group px-6 py-2 mb-1 hover:bg-[#151a2b] active:bg-[#151a2b] focus:bg-[#151a2b] focus:border-l-2 focus:border-[#6861CE] duration flex items-center gap-5">
            <FaLayerGroup className="group-focus:text-[#6861CE] text-base" />
            { activeSideBar && (
              <h2 className="font-medium group-focus:text-white text-[15px]">
                Images
              </h2>
            )}
          </Link>
        </li>

        <li onClick={() => toggleDropdown(0)}>
          <Link
            className={`group px-6 py-2 ${
              activeDropdown === 0
                ? "mb-0 bg-[#151a2b] border-l-2 border-[#6861CE]"
                : "mb-1"
            } duration-300 hover:bg-[#151a2b] active:bg-[#151a2b] focus:bg-[#151a2b] focus:border-l-2 focus:border-[#6861CE] duration flex items-center justify-between gap-5`}
          >
            <div className="flex items-center gap-5">
              <FaThList className="group-focus:text-[#6861CE] text-[15px]" />
              { activeSideBar && (
                <h2 className="font-medium group-focus:text-white text-[15px]">
                  Pricing
                </h2>
              )}
            </div>
            <IoMdArrowDropdown
              className={`${
                activeDropdown === 0 ? "rotate-180" : "rotate-0"
              } duration-200`}
            />
          </Link>
          { activeSideBar && (
            <ul
              className={`bg-[#151a2b] text-neutral-300 transition-all duration-300 overflow-hidden ${
                activeDropdown === 0
                  ? "max-h-40 opacity-100 px-6 pt-4 pb-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="mb-3 flex items-center gap-3">
                <IoMdAdd />
                <h3>Add Pricing</h3>
              </li>
              <li className="flex items-center gap-3">
                <GrFormView />
                <h3>View Pricing</h3>
              </li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleDropdown(1)}>
          <Link
            className={`group px-6 py-2 ${
              activeDropdown === 1
                ? "mb-0 bg-[#151a2b] border-l-2 border-[#6861CE]"
                : "mb-1"
            } duration-300 hover:bg-[#151a2b] active:bg-[#151a2b] focus:bg-[#151a2b] focus:border-l-2 focus:border-[#6861CE] duration flex items-center justify-between gap-5`}
          >
            <div className="flex items-center gap-5">
              <FaTable className="group-focus:text-[#6861CE] text-[15px]" />
              { activeSideBar && (
                <h2 className="font-medium group-focus:text-white text-[15px]">
                  Users
                </h2>
              )}
            </div>
            <IoMdArrowDropdown
              className={`${
                activeDropdown === 1 ? "rotate-180" : "rotate-0"
              } duration-200`}
            />
          </Link>
          { activeSideBar && (
            <ul
              className={`bg-[#151a2b] text-neutral-300 transition-all duration-300 overflow-hidden ${
                activeDropdown === 1
                  ? "max-h-40 opacity-100 px-6 pt-4 pb-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="mb-3 flex items-center gap-3">
                <FaUsers />
                <h3>Users Data</h3>
              </li>
              <li className="flex items-center gap-3">
                <GrUserAdmin />
                <h3>Admin Data</h3>
              </li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleDropdown(2)}>
          <Link
            className={`group px-6 py-2 ${
              activeDropdown === 2
                ? "mb-0 bg-[#151a2b] border-l-2 border-[#6861CE]"
                : "mb-1"
            } duration-300 hover:bg-[#151a2b] active:bg-[#151a2b] focus:bg-[#151a2b] focus:border-l-2 focus:border-[#6861CE] duration flex items-center justify-between gap-5`}
          >
            <div className="flex items-center gap-5">
              <FaTable className="group-focus:text-[#6861CE] text-[15px]" />
              { activeSideBar && (
                <h2 className="font-medium group-focus:text-white text-[15px]">
                  Orders
                </h2>
              )}
            </div>
            <IoMdArrowDropdown
              className={`${
                activeDropdown === 2 ? "rotate-180" : "rotate-0"
              } duration-200`}
            />
          </Link>
          { activeSideBar && (
            <ul
              className={`bg-[#151a2b] text-neutral-300 transition-all duration-300 overflow-hidden ${
                activeDropdown === 2
                  ? "max-h-40 opacity-100 px-6 pt-4 pb-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="mb-3 flex items-center gap-3">
                <TbTruckDelivery />
                <h3>Current Orders</h3>
              </li>
              <li className="flex items-center gap-3">
                <TbTruckOff />
                <h3>Dispatched Orders</h3>
              </li>
            </ul>
          )}
        </li>

        <li onClick={() => toggleDropdown(null)}>
          <Link className="group px-6 py-2 mb-1 hover:bg-[#151a2b] active:bg-[#151a2b] focus:bg-[#151a2b] focus:border-l-2 focus:border-[#6861CE] duration flex items-center gap-5">
            <GrTransaction className="group-focus:text-[#6861CE] text-[15px]" />
            { activeSideBar && (
              <h2 className="font-medium group-focus:text-white text-[15px]">
                Transactions
              </h2>
            )}
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default SideBar

{/* Side Navbar */}
      {/* onMouseEnter={() => setActiveSideBar(true)}
      onMouseLeave={() => setActiveSideBar(false)} 
      ${ sideBarButton 
              ? "max-w-64 opacity-100"
              : "max-w-20 opacity-100" 
              }  */}
      {/* <section 
        className={`h-screen bg-[#1A2035] duration-200 ${ activeSideBar
                  ? "max-w-64 opacity-100"
                  : "max-w-20 opacity-100"
              }`}> */}