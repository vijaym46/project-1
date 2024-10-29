import React from 'react'
import { navItems } from '../../components/Header/Menu/NavItems';
import { Link } from 'react-router-dom';

const PrintingService = () => {
    const serviceMenu = navItems.find(service => service.id === 4)?.submenu || [];

  return (
      <div className='lg:col-span-1'>
        <h1 className='text-xl font-semibold mb-5 sm:mb-8'>PRINTING SERVICES</h1>
        <div className='flex flex-col gap-y-[10px]'>
            {serviceMenu.map((Service) => {

            return (
                <Link className='px-4 py-4 text-gray-800  border border-gray-300 bg-neutral-50 hover:border-opacity-0 hover:text-white hover:bg-orange-400' to={Service.path}>{Service.title}</Link>
            )
            })}
        </div>
      </div>     
  )
}

export default PrintingService
