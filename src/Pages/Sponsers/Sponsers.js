import React from 'react'
import sponserBg from '../../Assets/sponser.png'
import Corousel from '../../Components/Corousel/Corousel'
export default function Sponsers() {
  return (
    <>
     <div className='md:h-screen ' id='sponser'>
        <div className="flex  justify-start mt-0 md:mt-10 overflow-hidden">
        <div className="container">
          <div className="w-3/4">
            <div className="flex flex-wrap w-full py-32 relative mb-4">
              <img alt="gallery" className="w-full  object-contain h-full object-center block absolute inset-0" src={sponserBg} />
              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                <h2 className="text-xl md:text-6xl text-white font-medium title-font mb-2 text-animation">Sponsers_</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Corousel/>
    </div>
  

 

    </>
  )
}
