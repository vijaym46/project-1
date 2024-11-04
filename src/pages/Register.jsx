import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='px-5 sm:px-10 md:px-20 pb-16 flex justify-center'>
      <div className='shadow-xl w-11/12 sm:w-3/4 lg:w-3/5'>
        <form action="" className='w-full pt-16 pb-8 px-5'>
          <h1 className='text-center text-orange-400 mb-5 font-bold text-2xl tracking-wide'>Register</h1>
          <label htmlFor="name" className='block text-neutral-700 font-medium mb-4 text-lg'>Full Name:</label>
          <input type="text" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="email" className='block text-neutral-700 font-medium mb-4 text-lg'>Email:</label>
          <input type="email" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="email" className='block text-neutral-700 font-medium mb-4 text-lg'>Password:</label>
          <input type="password" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="email" className='block text-neutral-700 font-medium mb-4 text-lg'>Confirm Password:</label>
          <input type="password" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="phone" className='block text-neutral-700 font-medium mb-4 text-lg'>Phone Number:</label>
          <input type="tel" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="address" className='block text-neutral-700 font-medium mb-4 text-lg'>Flat, Building, Company, House no:</label>
          <input type="text" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="street" className='block text-neutral-700 font-medium mb-4 text-lg'>Street, Area, Village:</label>
          <input type="text" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="zip-code" className='block text-neutral-700 font-medium mb-4 text-lg'>Zip Code:</label>
          <input type="number" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="city" className='block text-neutral-700 font-medium mb-4 text-lg'>City:</label>
          <input type="text" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="state" className='block text-neutral-700 font-medium mb-4 text-lg'>State:</label>
          <input type="text" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="company" className='block text-neutral-700 font-medium mb-4 text-lg'>Company Name (optional):</label>
          <input type="text" className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-6'/>
          <button className='block rounded focus:border-opacity-100 border-neutral-400 border-[3px] border-opacity-0 w-full px-2 py-1 bg-orange-400 hover:text-white hover:bg-orange-600 mb-2'>Register</button>
          <p className='text-center '>Already have an account? <Link to='/login' className='text-green-600'>Login now</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
