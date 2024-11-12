import React from 'react'
import { Link } from 'react-router-dom'
import product2 from '../assets/Product/product2.jpg'
import { FaInfoCircle } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Cart = () => {
  return (
    <div className='pb-16'>
      <div className='w-full h-32 sm:h-52 md:h-72 bg-socialbg flex flex-col items-center justify-center'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold sm:mb-2'>SHOPPING CART</h1>
        <p className='text-neutral-600 text-sm sm:text-base'><Link to='/cart' className='text-orange-500'>Home</Link> - Shopping Cart</p>
      </div>

      <div className='px-4 sm:px-8 md:px-12 lg:px-20 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10'>

        {/* --- Col 1 --- */}
        <div className='sm:col-span-2 sm:row-span-1 p-2 sm:p-4 flex justify-between gap-2 sm:gap-6 border rounded-lg'>
          <div className='flex justify-between gap-2 sm:gap-4'>
            <div className='w-24'>
              <img src={product2} alt="Product" />
            </div>
            <div>
              <h3 className='sm:text-xl font-medium'>2" X 3.5" Appointment Cards</h3>
              <p className='text-sm sm:text-base text-neutral-600'>Quantity: <span className='font-semibold text-neutral-700'>100</span></p>
              <p className='text-sm sm:text-base text-neutral-600'>Your total price: <span className='font-semibold text-neutral-700'>$17.57</span></p>
              <Link className='text-sm sm:text-base text-orange-500 hover:underline underline-offset-4 duration-200'>Files/Order Info</Link>
            </div>
          </div>
          
          <div className='flex flex-col items-end text-sm sm:text-[17px] font-medium'>
            <Link className='hover:text-orange-700 duration-200'>Edit</Link>
            <button className='hover:text-orange-700 duration-200'>Duplicate</button>
            <button className='text-lg my-1 border-transparent border-l border-r border-b hover:border-gray-500 hover:border-l hover:border-r hover:border-b hover:text-orange-700 p-[1px] duration-200 rounded-full'><FaInfoCircle /></button>
            <button className='text-xl border-transparent border-l border-r border-b hover:border-gray-500 hover:border-l hover:border-r hover:border-b hover:text-orange-700 duration-200 rounded'><MdDelete /></button>
          </div>
        </div>

        {/* --- Col 2 --- */}
        <div className='sm:col-span-1 sm:row-span-2 max-[460px]:px-5 px-10 sm:px-0'>
          <div className='border'>
            <h2 className='px-5 py-2 text-2xl font-medium bg-socialbg'>Cart Summary</h2>

              <div className='p-4 text-[17px] border-b'>
                <div className='mb-3 flex justify-between'>
                  <p>Subtotal</p>
                  <p>$150</p>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping</p>
                  <p>$10</p>
                </div>
              </div>
              <div className='p-4 font-bold text-xl flex justify-between'>
                <p>Total</p>
                <p>$160</p>
              </div>
              <div className='px-4 pb-6'>
                <button className='text-center w-full px-2 py-3 bg-orange-400 hover:text-white hover:bg-orange-600 duration-200 sm:rounded-md'><span className='sm:hidden md:inline'>Proceed To</span> Checkout</button>
              </div>
              
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Cart
