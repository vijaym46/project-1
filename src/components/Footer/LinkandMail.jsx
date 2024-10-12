import React from 'react'
import { quicklink } from './quickLinks'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'


const LinkandMail = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

        <div className='mb-5'>
            <h5 className='text-2xl font-bold mb-4'>Quick Links</h5>
            <div className='flex flex-col space-y-2'>
            {quicklink.map((link) => {
                return (
                <div key={link.id} className='flex items-center hover:underline'>
                    <MdKeyboardArrowDown className='-rotate-90 mr-1 text-black'/>
                    <Link key={link.id} to={link.path} className='text-gray-700'>{link.title}</Link>
                </div>
                )
            })}
            </div>
        </div>

        <div className='mb-5'>
            <h5 className='text-2xl mb-4 font-bold'>Newsletter</h5>
            <form>
                <input type="text" className='border-0 py-4 px-3 mb-4 w-full' placeholder='Your Name' required/>
                <input type="text" className='border-0 py-4 px-3 mb-4 w-full' placeholder='Your Email' required/>
                <button className='bg-orange-200 hover:bg-orange-300 transition-all duration-400 py-3 w-full'>
                    Subscribe Now
                </button>
            </form>
        </div>

    </div>
  )
}

export default LinkandMail
