import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';

const Shop = () => {
  const printingServices = [ 'Banners', 'Bookmarks', 'Book Printing', 'Brochures', 'Business Cards', 'Buttons', 'Calendars', 'Car Magnets', 'Canvas Printing & Giclee', 'Customized Greeting Cards', 'E-Journal', 'Event Journal', 'Flyers', 'Funeral Buttons', 'Journals', 'Logo Designing' ]

  return (
    <div>
      <div className='w-full h-80 bg-indigo-50 flex flex-col items-center gap-y-4 justify-center'>
        <h1 className='text-4xl font-semibold'>OUR SHOP</h1>
        <p><Link to={'/shop'} className='text-lg hover:underline text-orange-500'>Home</Link>&nbsp; - &nbsp;Shop</p>
      </div>

      <div className='px-14 py-24'>

        {/* --- Printing Services Start --- */}
        <div>
          <h1 className='text-xl font-semibold'>PRINTING SERVICES</h1>
          <div className='flex flex-col gap-y-[10px] mt-8'>
            {printingServices.map((pService) => {
              return (
                <Link className='px-10 py-4 text-gray-800 text-lg border border-gray-300 bg-gray-100 hover:border-opacity-0 hover:text-white hover:bg-orange-400'>{pService}</Link>
              )
            })}
          </div>
        </div>
        {/* --- Printing Services Start --- */}


        {/* --- Products --- */}
        <div>
            <div>
              <form action="">
                <input type="text" />
                <button> <CiSearch /> </button>
              </form>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Shop
