import React from "react";
import SideBar from '../Admin/SideBar'
import Header from "./Header";
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import StatisticsChart from "./StatisticsChart";

const Dashboard = () => {

  return (
    <div className="flex">

      <SideBar />

      <div className="w-full">
        <Header />
        <div className="bg-[#F5F7FD] px-7 py-6 h-screen overflow-y-auto">
          <h1 className="text-2xl mb-1 sm:mb-3 font-medium text-blue-950">Dashboard</h1>
          <p className="text-neutral-500 font-light">Stalbans printing Admin Dashboard</p>
          <div className="flex w-full gap-10 justify-around items-center mt-3 sm:mt-7">
            <div className="w-full flex items-center gap-4 bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] p-4 rounded-xl">
              <div className="p-3 bg-blue-600 rounded-md">
                <FaUsers className="text-white text-4xl"/>
              </div>
              <div>
                <p className="text-neutral-400 font-light">Visitors</p>
                <h3 className="text-xl">1,294</h3>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] p-4 rounded-xl">
              <div className="p-3 bg-[#48ABF7] rounded-md">
                <FaUserCheck className="text-white text-4xl"/>
              </div>
              <div>
                <p className="text-neutral-400 font-light">Subscribers</p>
                <h3 className="text-xl">1,303</h3>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] p-4 rounded-xl">
              <div className="p-3 bg-[#31CE36] rounded-md">
                <FaLuggageCart className="text-white text-4xl"/>
              </div>
              <div>
                <p className="text-neutral-400 font-light">Sales</p>
                <h3 className="text-xl">$ 1,345</h3>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 bg-white shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] p-4 rounded-xl">
              <div className="p-3 bg-[#6861CE] rounded-md">
                <FaCheckCircle className="text-white text-4xl"/>
              </div>
              <div>
                <p className="text-neutral-400 font-light">Order</p>
                <h3 className="text-xl">578</h3>
              </div>
            </div>
          </div>

          <section className="mt-8">
            <div className="bg-white px-5 pt-1 pb-2 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)] rounded-xl">
              <div className="flex items-center justify-between border-b py-4">
                <h2 className="text-2xl text-[#2A2F5B]">User Statistics</h2>
                <div className="flex items-center gap-3">
                  <button className="text-[#31CE36] text-sm px-4 py-2 rounded-full bg-green-50 hover:text-white hover:bg-[#31CE36] duration-200">Export</button>
                  <button className="text-[#48ABF7] text-sm px-4 py-2 rounded-full bg-blue-50 hover:text-white hover:bg-[#48ABF7] duration-200 flex items-center gap-1"><FaPrint />Print</button>
                </div>
              </div>
              <StatisticsChart />
            </div>
          </section>

        </div>

      </div>  
    </div>
  );
};

export default Dashboard;