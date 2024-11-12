import React from 'react'
import { IoSearch } from 'react-icons/io5';
import product2 from '../assets/Product/product2.jpg'
import product4 from '../assets/Product/product4.png'
import product5 from '../assets/Product/product5.jpg'
import product6 from '../assets/Product/product6.jpg'

const MyOrders = () => {
  return (
    <div className='pb-20'>
      <div className='custom-991:px-[3vw] '>
        <hr className='w-full'/>
      </div>
      
      <div className='flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-44 pb-5 sm:pb-10'>
        <div className='pt-4 sm:pt-8 flex w-full justify-between items-center'>
          <h1 className='text-xl sm:text-2xl md:text-3xl leading-5 sm:leading-none'>Your<br className='sm:hidden'/><span className='text-orange-700'> Orders</span></h1>
          <form action="" className='flex w-1/2 sm:w-auto gap-[10px]'>
            <div className='relative'>
              <input type="search" placeholder='Search your orders' className='w-full pl-6 pr-[6px] py-[2px] border border-neutral-400 outline-2 outline-offset-4 outline-orange-800 rounded'/>
              <IoSearch className='absolute top-[7px] left-[6px]'/>
            </div>
            <button className='bg-orange-400 hidden sm:block focus:outline outline-2 outline-offset-4 outline-orange-800 hover:text-white hover:bg-orange-600 duration-200 px-2 rounded-full text-sm font-medium'>Search <span className="hidden md:inline">Orders</span></button>
          </form>
        </div>
      </div>

      <div className='px-4 sm:px-6 lg:px-20 flex w-full justify-center'>

        {/* --- Mobile Responsive --- */}
        <div className='block md:hidden w-full min-[452px]:w-3/4'>
          <div className='mb-2 shadow-[3px_0px_8px_0px_rgba(0,0,0,0.2)] hover:shadow-[3px_3px_8px_0px_rgba(0,0,0,0.3)] duration-200 flex p-4 rounded'>
            <img src={product2} alt="ordered-product" className='w-20 h-16'/>
            <div className='ml-2'>
              <h2>Agatha Cecelia Fleming</h2>
              <p>Price: <span className='text-neutral-700'>$100</span></p>
              <p>Invoice no: <span className='text-neutral-700'>10102944</span></p>
              <p>Transaction ID: <span className='text-neutral-700'>18183303030011</span></p>
              <p>Payment Status: <span className='text-neutral-700'>Initial Payment Received</span></p>
              <p>Order ID: 4</p>
            </div>
          </div>
          <div className='mb-2 shadow-[3px_0px_8px_0px_rgba(0,0,0,0.2)] hover:shadow-[3px_3px_8px_0px_rgba(0,0,0,0.3)] duration-200 flex p-5 rounded'>
            <img src={product4} alt="ordered-product" className='w-20 h-16'/>
            <div className='ml-2'>
              <h2>Agatha Cecelia Fleming</h2>
              <p>Price: <span className='text-neutral-700'>$100</span></p>
              <p>Invoice no: <span className='text-neutral-700'>10102944</span></p>
              <p>Transaction ID: <span className='text-neutral-700'>18183303030011</span></p>
              <p>Payment Status: <span className='text-neutral-700'>Initial Payment Received</span></p>
              <p>Order ID: 4</p>
            </div>
          </div>
          <div className='mb-2 shadow-[3px_0px_8px_0px_rgba(0,0,0,0.2)] hover:shadow-[3px_3px_8px_0px_rgba(0,0,0,0.3)] duration-200 flex p-5 rounded'>
            <img src={product5} alt="ordered-product" className='w-20 h-16'/>
            <div className='ml-2'>
              <h2>Agatha Cecelia Fleming</h2>
              <p>Price: <span className='text-neutral-700'>$100</span></p>
              <p>Invoice no: <span className='text-neutral-700'>10102944</span></p>
              <p>Transaction ID: <span className='text-neutral-700'>18183303030011</span></p>
              <p>Payment Status: <span className='text-neutral-700'>Initial Payment Received</span></p>
              <p>Order ID: 4</p>
            </div>
          </div>
          <div className='mb-2 shadow-[3px_0px_8px_0px_rgba(0,0,0,0.2)] hover:shadow-[3px_3px_8px_0px_rgba(0,0,0,0.3)] duration-200 flex p-5 rounded'>
            <img src={product6} alt="ordered-product" className='w-20 h-16'/>
            <div className='ml-2'>
              <h2>Agatha Cecelia Fleming</h2>
              <p>Price: <span className='text-neutral-700'>$100</span></p>
              <p>Invoice no: <span className='text-neutral-700'>10102944</span></p>
              <p>Transaction ID: <span className='text-neutral-700'>18183303030011</span></p>
              <p>Payment Status: <span className='text-neutral-700'>Initial Payment Received</span></p>
              <p>Order ID: 4</p>
            </div>
          </div>
        </div>
        
        {/* --- Desktop Responsive --- */}
        <table className='hidden md:inline-table w-full border-collapse'>
          <thead>
            <tr>
              <th className='border'>Product</th>
              <th className='border'>Price</th>
              <th className='border'>Invoice no</th>
              <th className='border'>Transaction ID</th>
              <th className='border'>Payment Status</th>
              <th className='border'>Order ID</th>
            </tr>
          </thead>

          <tbody>
            <tr className='text-center'>
              <td className='border flex py-4'><img src={product2} alt="ordered-product" className='w-36'/><p className='p-2'>Agatha Cecelia Fleming</p></td>
              <td className='border px-1'>$100</td>
              <td className='border px-1'>10102944</td>
              <td className='border px-1'>18183303030011</td>
              <td className='border px-1'>Initial Payment Received</td>
              <td className='border px-1'>4</td>
            </tr>
            <tr className='text-center'>
              <td className='border flex py-4'><img src={product4} alt="ordered-product" className='w-36'/><p className='p-2'>Agatha Cecelia Fleming</p></td>
              <td className='border px-1'>$100</td>
              <td className='border px-1'>10102944</td>
              <td className='border px-1'>18183303030011</td>
              <td className='border px-1'>Fully Paid</td>
              <td className='border px-1'>3</td>
            </tr>
            <tr className='text-center'>
              <td className='border flex py-4'><img src={product5} alt="ordered-product" className='w-36'/><p className='p-2'>Agatha Cecelia Fleming</p></td>
              <td className='border px-1'>$100</td>
              <td className='border px-1'>10102944</td>
              <td className='border px-1'>18183303030011</td>
              <td className='border px-1'>Fully Paid</td>
              <td className='border px-1'>2</td>
            </tr>
            <tr className='text-center'>
              <td className='border flex py-4'><img src={product6} alt="ordered-product" className='w-36'/><p className='p-2'>Agatha Cecelia Fleming</p></td>
              <td className='border px-1'>$100</td>
              <td className='border px-1'>10102944</td>
              <td className='border px-1'>18183303030011</td>
              <td className='border px-1'>Initial Payment Received</td>
              <td className='border px-1'>1</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default MyOrders
