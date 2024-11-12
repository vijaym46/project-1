import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { SlHome } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const SubCategoyPrice = () => {
  return (
    <div className='flex'>
      <SideBar />

      <div className='w-full'>
        <Header />
        <div className="px-5 py-5 bg-[#F5F7FD] h-screen overflow-y-auto">
        {/* <div className="px-5 py-5 bg-[#F5F7FD] h-screen overflow-y-auto"> */}
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
                <select className='focus:outline-none focus:border-blue-300 border rounded px-1 py-1'>
                  <option value="category">Sub Category</option>
                  <option value="admin">Active</option>
                  <option value="user">Inactive</option>
                </select>
                <button className='bg-blue-500 px-3 py-1 rounded text-white'>Apply Filters</button>
              </div>  
            </div>

            {/* --- Table --- */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white mt-8" style={{ borderCollapse: 'separate', borderSpacing: '2px' }}>
                <thead>
                  <tr>
                    <th className="px-2 sm:px-4 text-start py-2 border border-[#48ABF7] text-white font-normal bg-blue-400">CATEGORY NAME</th>
                    <th className="px-2 sm:px-4 text-start py-2 border border-[#48ABF7] text-white font-normal bg-blue-400">FIELDS</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td className="px-4 py-2 font-normal border border-[#48ABF7]">Paper Type</td>
                    <td className="px-4 py-2 border border-[#48ABF7]">
                      <table className="w-full bg-neutral-100">
                        <tbody>
                          <tr className='hover:bg-neutral-200 duration-100'>
                            <td className='px-2 py-2 border border-[#48ABF7]'>Laminated</td>
                            <td className='px-2 py-2 border border-[#48ABF7]'><input type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter price" /></td>
                            <td className="px-4 py-2 border border-[#48ABF7]">
                              <button className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center" title="Update">
                                Update
                              </button>
                            </td>
                          </tr>
                          <tr className='hover:bg-neutral-200 duration-100'>
                            <td className='px-2 py-2 border border-[#48ABF7]'>Field 2</td>
                            <td className='px-2 py-2 border border-[#48ABF7]'><input type="text" className="form-input w-full border rounded-md p-2" placeholder="Enter value 2" /></td>
                            <td className="px-4 py-2 border border-[#48ABF7]">
                              <button className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center" title="Update">
                                Update
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Size Row */}
                  <tr>
                    <td className="px-4 py-2 border border-[#48ABF7]">Size</td>
                    <td className="px-4 py-2 border border-[#48ABF7]">
                      <table className="w-full bg-neutral-100">
                        <tbody>
                          <tr className='hover:bg-neutral-200 duration-100'>
                            <td  className='px-2 py-2 border border-[#48ABF7] blue-400'>2.25</td>
                            <td  className='px-2 py-2 border border-[#48ABF7]'><input type="text" className="form-input w-full border rounded-md p-2" placeholder="Enter price" /></td>
                            <td className="px-4 py-2 border border-[#48ABF7]">
                              <button className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center" title="Update">
                                Update
                              </button>
                            </td>
                          </tr>
                          <tr className='hover:bg-neutral-200 duration-100'>
                            <td className='px-2 py-2 border border-[#48ABF7]'>3</td>
                            <td className='px-2 py-2 border border-[#48ABF7]'><input type="text" className="form-input w-full border rounded-md p-2" placeholder="Enter value 2" /></td>
                            <td className="px-4 py-2 border border-[#48ABF7]">
                              <button className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center" title="Update">
                                Update
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  {/* Quantity Row */}
                  <tr>
                    <td className="px-4 py-2 border border-[#48ABF7]">Quantity</td>
                    <td className="px-4 py-2 border border-[#48ABF7]">
                      <table className="w-full bg-neutral-100">
                        <tbody>
                          {['50', '100', '150', '200', '250', '300'].map((quantity, index) => (
                            <tr key={index} className='hover:bg-neutral-200 duration-100'>
                              <td className='px-2 py-2 border border-[#48ABF7]'>{quantity}</td>
                              <td className='px-2 py-2 border border-[#48ABF7]'><input type="text" className="form-input w-full border rounded-md p-2" placeholder="Enter value" /></td>
                              <td className="px-4 py-2 border border-[#48ABF7]">
                                <button className="bg-blue-500 text-white py-1 px-3 rounded-full flex items-center" title="Update">
                                  Update
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          

        </div>
      </div>
    </div>
  )
}

export default SubCategoyPrice
