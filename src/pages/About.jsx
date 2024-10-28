import React from 'react'
import aboutImg from '../assets/Carousel/St Albans Banner 02.jpg'
import trust from '../assets/About/trust.jpg'
import service from '../assets/About/bell.jpg'
import excellence from '../assets/About/excellence.jpg'
import care from '../assets/About/care.jpg'

const About = () => {
  return (
    <div className='px-6 sm:px-10 pb-5 sm:pb-8 flex flex-col items-center justify-center'>
      <div>
        <div className='relative w-full h-full'>
          <img src={aboutImg} alt="about img" className='w-full h-full'/>
          <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
            <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>About us</h1>
          </div>
        </div>
      </div>
      <div className='sm:px-10 pt-5 pb-8 sm:py-10'>
        <div className='flex flex-col text-neutral-700 items-center pb-7 sm:pb-10 justify-center'>
          <h1 className='text-black text-3xl sm:text-4xl font-medium'>Let us Introduce Ourselves</h1>
          <p className='mt-4 sm:mt-8 md:w-3/4 sm:text-center'>St. Albans Printing Company was founded by the legendary Jimmie Sidberry in 1969. Today, it has come a long way. It has been named Southeast Queens’ most trusted printing institution. Under the leadership of Sanchai George the company was re-named St. Albans Digital Printing Inc., and in 2014 Craft Communications LLC was born. As he continues to build on the rich legacy of the founder, Sanchai's has taken St. Albans Digital Printing Inc., and Craft Communications LLC to new heights.<br/><br/>
          We are delighted to introduce our new offering, the Pure Pixel Portrait Studios, which is the school division of Craft Communications LLC. Our services extend beyond capturing smiles and special moments of all school-aged children. We also ensure that most schools receive same-day printing or faster printing turnover than our competitors, ensuring that you receive your cherished memories in a timely fashion. Join us to experience the convenience and quality of our services.</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-black text-3xl sm:text-4xl font-medium'>About Stalbans Printing</h1>
          <div className='md:w-4/5 grid grid-cols-1 text-white md:grid-cols-2 gap-5 sm:gap-8 mt-4 sm:mt-8'>
            <div className='bg-[#0C4175] px-4 py-5 rounded-md'>
              <h1 className='text-2xl sm:text-3xl font-bold'>Our Business</h1>
              <p className='mt-2 sm:mt-4'>
                A trusted source for print fulfillment since 1996, stalbansprinting helps print, design, and marketing professionals support their customers by offering a vast selection of quality print products at guaranteed trade-only prices. Our expansive catalog includes everything from standard marketing collateral like business cards and brochures to harder-to-find specialty, large format, and promotional products.
              </p> <br/>
              <p className='mb-6'>
                st.albans mission is “to simplify and transform print.” With locations across North America, state-of-the-art equipment, and fast turnarounds, 4over offers our customers savings, speed, and scale—so they can move more projects faster and net bigger profits.
              </p>
            </div>
            <div className='bg-[#0C4175] px-4 pt-5 pb-8 sm:pb-10 rounded-md'>
              <h1 className='text-2xl sm:text-3xl font-bold'>Our Customers</h1>
              <p className='mt-2 sm:mt-4'>
                st.albans operates as a B2B wholesale trade printer, offering our services and discounted wholesale pricing only to qualified businesses that resell our print products to other businesses and individuals. We view our customers as extensions of our 4over family, including professionals throughout the printing, marketing, and graphic arts industries such as:
              </p> <br/>
              <p>
                Independent Printers | Print Franchisees | Print Retailers | Print Brokers and Aggregators | Business Service Centers | Marketing Agencies | Graphic Designers | Photographers | Promotional Products Brokers | Sign Shops
              </p> <br />
              <p>
                We identify with, understand, support, and stand behind our small business partners because we began as one—and the trials and tribulations of staying afloat while trying to grow are part of our DNA!
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='md:w-2/3 pb-5 sm:pb-10 flex flex-col items-center justify-center'>
        <h1 className='text-2xl sm:text-3xl font-semibold mb-5 sm:mb-8'>Why Choose Stalbans Printing</h1>
        <p className='text-neutral-800'>1. <span className='text-black font-medium'>Crafting Your Identity: </span>We believe in the power of unique stories. Our custom printing services are tailored to help businesses stand out in the crowded marketplace. From eye-catching die-cut prints to luxurious business cards, we're here to ensure your brand speaks volumes.</p>
        <p className='text-neutral-800 pt-4'>2. <span className='text-black font-medium'>Quality Unleashed: </span>When it comes to printing, quality is non-negotiable. We take pride in delivering the finest prints that not only meet but exceed your expectations. Immerse yourself in a world where every detail matters, and every print tells a story.</p>
        <p className='text-neutral-800 pt-4'>3. <span className='text-black font-medium'>Affordability That Surprises: </span>Elevating your brand shouldn't break the bank. Experience the joy of premium prints at budget-friendly prices. At st.albans, we've redefined affordability without compromising on excellence.</p>
        <p className='text-neutral-800 pt-4'>4. <span className='text-black font-medium'>Swift and Seamless Delivery: </span>Time is of the essence, and we understand that. Our commitment to prompt delivery spans across the USA. Get ready to witness the magic of receiving top-notch prints at your doorstep in just days.</p>
      </div>

      <div className='pt-6 gap-8 grid sm:grid-cols-2 lg:grid-cols-4'>

        <div className='shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)] rounded px-5 pt-3 pb-6 sm:pb-10 flex flex-col items-center'>
          <div className='flex pb-2 gap-6 flex-row-reverse items-center justify-center sm:flex-col'>
            <div className='w-1/3 sm:w-3/4'>
              <img src={trust} alt="Loyalty" className='rounded-md'/>
            </div>
            <h2 className='border rounded-lg px-3 py-2 sm:border-none sm:rounded-none sm:px-0 sm:py-0 text-xl font-semibold'>Loyalty</h2>
          </div>
          <p className='text-neutral-500'>Our customers are our lifeblood. We recognize that without the loyalty of our customers we would not be where we are today. Everything we do is centered around cultivating and nurturing a prosperous relationship.</p>
        </div>

        <div className='shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)] rounded px-5 pt-3 pb-6 sm:pb-10 flex flex-col items-center'>
          <div className='flex pb-2 gap-6 flex-row-reverse items-center justify-center sm:flex-col'>
            <div className='w-1/3 sm:w-3/4'>
              <img src={service} alt="Service" className='rounded-md'/>
            </div>
            <h2 className='border rounded-lg px-3 py-2 sm:border-none sm:rounded-none sm:px-0 sm:py-0 text-xl font-semibold'>Service</h2>
          </div>
          <p className='text-neutral-500'>It’s our privilege to serve. We are committed to meeting or exceeding expectations. In order to provide best-in-class service, we are courteous, responsive, and helpful at all times when working with customers, suppliers, and 4over associates.</p>
        </div>

        <div className='shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)] rounded px-5 pt-3 pb-6 sm:pb-10 flex flex-col items-center'>
          <div className='flex pb-2 gap-6 flex-row-reverse items-center justify-center sm:flex-col'>
            <div className='w-1/3 sm:w-3/4'>
              <img src={excellence} alt="Excellence" className='rounded-md'/>
            </div>
            <h2 className='border rounded-lg px-3 py-2 sm:border-none sm:rounded-none sm:px-0 sm:py-0 text-xl font-semibold'>Excellence</h2>
          </div>
          <p className='text-neutral-500'>Excellence is in our DNA. We pride ourselves in excelling in all that we do by collaborating as a team to deliver quality products, innovative technologies, and creative solutions that help our customers grow their businesses.</p>
        </div>

        <div className='shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)] rounded px-5 pt-3 pb-6 sm:pb-10 flex flex-col items-center'>
          <div className='flex pb-2 gap-6 flex-row-reverse items-center justify-center sm:flex-col'>
            <div className='w-1/3 sm:w-3/4'>
              <img src={care} alt="Others" className='rounded-md'/>
            </div>
            <h2 className='border rounded-lg px-3 py-2 sm:border-none sm:rounded-none sm:px-0 sm:py-0 text-xl font-semibold'>Others</h2>
          </div>
          <p className='text-neutral-500'>We care. People are a priority. We are committed to sharing in our success by giving back to the community.</p>
        </div>

      </div>

    </div>
  )
}

export default About