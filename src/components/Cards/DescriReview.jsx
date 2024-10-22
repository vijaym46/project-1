import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const DescriReview = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    
    <div className="px-10 xl:px-20 mb-20">
      <div>


        {/* Button start */}
        <div className="flex justify-center border-b mb-4">
          <button
            className={`hover:text-orange-400 duration-200 py-2 px-4 ${activeTab === "tab1" ? "border-t border-l border-r text-orange-400" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            Description
          </button>
          <button
            className={`hover:text-orange-400 duration-200 py-2 px-4 ${activeTab === "tab2" ? "border-t border-l border-r text-orange-400" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            Information
          </button>
          <button
            className={`hover:text-orange-400 duration-200 py-2 px-4 ${activeTab === "tab3" ? "border-t border-l border-r text-orange-400" : ""}`}
            onClick={() => setActiveTab("tab3")}
          >
            Reviews (0)
          </button>
        </div>
        {/* Button ends */}


        <div>
          {activeTab === "tab1" && (
            <div>
              <h4 className="text-2xl mb-3">Product Description</h4>
              <p className='text-neutral-500'>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p> <br/>
              <p className='text-neutral-500'>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
            </div>
          )}

          {activeTab === "tab2" && (
            <div className="text-neutral-500">
              <h4 className="text-2xl mb-3 text-black">Additional Information</h4>
              <p className='mb-6'>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                <ul className="list-none">
                  <li className="mb-2">Sit erat duo lorem duo ea consetetur.</li><hr className='pb-2' />
                  <li className="mb-2">Amet kasd gubergren sit sanctus et lorem eos.</li><hr className='pb-2' />
                  <li className="mb-2">Duo amet accusam eirmod nonumy stet.</li><hr className='pb-2' />
                  <li className="mb-2">Takimata ea clita labore amet ipsum erat justo.</li><hr className='pb-2' />
                </ul>
                <ul className="list-none">
                  <li className="mb-2">Sit erat duo lorem duo ea consetetur.</li><hr className='pb-2' />
                  <li className="mb-2">Amet kasd gubergren sit sanctus et lorem eos.</li><hr className='pb-2' />
                  <li className="mb-2">Duo amet accusam eirmod nonumy stet.</li><hr className='pb-2' />
                  <li className="mb-2">Takimata ea clita labore amet ipsum erat justo.</li><hr className='pb-2' />
                </ul>
              </div>
            </div>
          )}

          {activeTab === "tab3" && (
            <div className="tab-pane">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-500">
                <div>
                  <h4 className="text-black text-2xl mb-4">1 review for "Colorful Stylish Shirt"</h4>
                  <div className="flex mb-4">
                    {/* <img
                      src="img/user.jpg"
                      alt="Image"
                      className="w-12 h-12 rounded-full mr-3"
                    /> */}
                    <CgProfile className='w-12 h-12 rounded-full mr-3'/>
                    <div>
                      <h6>
                        John Doe
                        <small> - <i>01 Jan 2045</i></small>
                      </h6>
                      <div className="flex items-center text-orange-400 mb-2">
                      <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> <FaRegStar />
                      </div>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor
                        labore accusam ipsum et no at.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='text-neutral-500'>
                  <h4 className="text-2xl text-black mb-4">Leave a review</h4>
                  <small>
                    Your email address will not be published. Required fields
                    are marked *
                  </small>
                  <div className="flex my-3">
                    <p className="mr-2">Your Rating * :</p>
                    <div className="flex items-center text-orange-500">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <form>
                    <div className="flex items-center justify-center mb-3">
                      <label htmlFor="message" className='whitespace-nowrap w-36'>Your Review *</label>
                      <textarea
                        id="message"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <label htmlFor="name" className='whitespace-nowrap w-36'>Your Name *</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        id="name"
                      />
                    </div>
                    <div className="flex items-center justify-center mb-3">
                      <label htmlFor="email" className='whitespace-nowrap w-36'>Your Email *</label>
                      <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        id="email"
                      />
                    </div>
                    <div className="flex items-center mb-0">
                      <button
                        type="submit"
                        className="bg-orange-300 text-black px-5 py-2 duration-200 hover:bg-orange-400"
                      >
                        Leave Your Review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default DescriReview


{/* <div className='flex w-full items-center justify-center gap-6 mb-10'>
      <button className='px-4 py-2 border-b hover:border-t'>Description</button>
      <button className='px-4 py-2 border-b'>Information</button>
      <button className='px-4 py-2 border-b'>Review (0)</button>
    </div> */}