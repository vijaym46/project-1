import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    
    <div className='px-5 sm:px-10 md:px-20 pb-16 flex justify-center'>
      
     
      <div className='shadow-xl w-11/12 sm:w-3/4 lg:w-3/5'>
        <form action="" className='w-full pt-16 pb-8 px-5'>
          <h1 className='text-center text-orange-400 mb-5 font-bold text-2xl tracking-wide'>Login</h1>
          <label htmlFor="email" className='block text-neutral-700 font-medium mb-4 text-lg'>Email:</label>
          <input type="email" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-2'/>
          <label htmlFor="password" className='block text-neutral-700 font-medium mb-4 text-lg'>Password:</label>
          <input type="password" required className='focus:outline-none text-neutral-600 px-2 py-1 rounded w-full border-neutral-300 border mb-6'/>
          <button className='block rounded focus:border-opacity-100 border-neutral-400 border-[3px] border-opacity-0 w-full px-2 py-1 bg-orange-400 hover:text-white hover:bg-orange-600 mb-2'>Login</button>
          <p className='text-center '>Don’t have an account? <Link to='/register' className='text-green-600'>Register now</Link></p>
        </form>
      </div>

    </div>

  )
}

export default Login