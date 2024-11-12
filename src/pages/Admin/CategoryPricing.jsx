import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { SlHome } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const CategoryPricing = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full">
        <Header />
        <div className="px-5 py-5 bg-[#F5F7FD] h-screen">
          <div className="text-blue-950 flex items-center gap-6">
            <h1 className="pr-6 text-2xl font-medium border-r">
              Admin Users
            </h1>
            <div className="flex text-sm items-center gap-3">
              <button>
                <SlHome />
              </button>
              <SlArrowRight />
              <button>
                Tables
              </button>
              <SlArrowRight />
              <button>
                Datatables
              </button>
            </div>
          </div>

          <div className='bg-white mt-10 px-3 py-4 rounded-lg'>
            <div className='flex items-center gap-3 text-sm'>
              <p className='text-neutral-500'>Filter by Role:</p>
              <div className='flex items-center gap-2'>
                <select className='focus:outline-none focus:border-blue-300 border rounded px-1 py-1'>
                  <option value="category">Category</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <button className='bg-blue-500 px-3 py-1 rounded text-white'>Apply Filters</button>
              </div>  
            </div>
          
            {/* --- Table --- */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white mt-8" style={{ borderCollapse: 'separate', borderSpacing: '2px' }}>
                <thead>
                  <tr>
                    <th className="px-2 sm:px-4 text-start py-2 border border-[#48ABF7] text-white font-normal bg-blue-400">SUB-CATEGORY NAME</th>
                    <th className="px-2 sm:px-4 text-start py-2 border border-[#48ABF7] text-white font-normal bg-blue-400">PRICE</th>
                    <th className="px-2 sm:px-4 text-start py-2 border border-[#48ABF7] text-white font-normal bg-blue-400">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td className="px-4 py-2 font-normal border border-[#48ABF7]">Bookmarks</td>
                    <td className="px-4 py-2 border border-[#48ABF7]">
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td  className='px-2 py-2'><input type="text" className="form-input w-full border rounded-md p-2" placeholder="Enter price" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="px-4 py-2 border border-[#48ABF7]">
                      <button className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center" title="Update">
                        Update
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 border border-[#48ABF7]">Mask</td>
                    <td className="px-4 py-2 border border-[#48ABF7]">
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td  className='px-2 py-2'><input type="text" className="form-input w-full border rounded-md p-2" placeholder="Enter price" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="px-4 py-2 border border-[#48ABF7]">
                      <button className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center" title="Update">
                        Update
                      </button>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoryPricing;
