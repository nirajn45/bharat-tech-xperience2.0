import React from 'react'
import communityBg from '../../Assets/community.png'
import Corousel2 from '../../Components/Corousel/Corousel2'
export default function Community() {
  return (
    <>
     <div className='md:h-screen ' id='sponser'>
        <div className="flex  justify-start mt-0 md:mt-10 overflow-hidden">
        <div className="container">
          <div className="w-3/4">
            <div className="flex flex-wrap w-full py-32 relative mb-4">
              <img alt="gallery" className="w-full  object-contain h-full object-center block absolute inset-0" src={communityBg} />
              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                <h2 className="text-xl md:text-6xl text-white font-medium title-font mb-2 text-animation">Community Partners_</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-14">
      <Corousel2/>
      </div>
    </div>
  

 

    </>
  )
}
