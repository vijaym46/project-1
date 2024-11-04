import React from 'react'
import { IoSearch } from 'react-icons/io5';

const MyOrders = () => {
  return (
    <div>
      <div className='custom-991:px-[3vw] '>
        <hr className='w-full'/>
      </div>
      
      <div className='flex flex-col justify-center px-44 pb-20'>
        <div className='pt-4 flex w-full justify-between items-center'>
          <h1 className='text-3xl'>Your Orders</h1>
          <form action="" className='flex gap-[10px]'>
            <div className='relative'>
              <input type="search" placeholder='Search your orders' className='pl-6 pr-[6px] py-[2px] border border-neutral-400 rounded focus:outline-none'/>
              <IoSearch className='absolute top-[7px] left-[6px]'/>
            </div>
            <button>Search Orders</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MyOrders
