import React from 'react'
import communityBg from '../../Assets/community.png'
import chandigarh from '../../Assets/gdg chandigarh.png'
import jhalandar from '../../Assets/cp-gdg jalandhar.png'
import ludhiana from '../../Assets/cp-gdg ludhiana.png'
export default function Community() {
  return (
    <>
     <div className='md:h-screen mb-8' id='sponser'>
        <div className="flex  justify-start  overflow-hidden ">
        <div className="container">
          <div className="w-3/4">
            <div className="flex flex-wrap w-full py-20 relative ">
              <img alt="gallery" className="w-full  object-contain h-full object-center block absolute inset-0" src={communityBg} />
              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                <h2 className="text-xl md:text-6xl text-white font-medium title-font  text-animation">Community Partners_</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-center  ">
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 md:py-24 mx-auto">
  {/* <div className=" inset-0 flex items-center justify-center z-20 relative">
              <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-500 to-orange-500 font-bold">To Be Announced</h1>
            </div> */}
    <div class="flex flex-wrap gap-10 justify-center z-10 max-w-7xl">
      <div class="p-2 md:w-1/5">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src={chandigarh} alt="blog"/>
       
        </div>
      </div>
      <div class="p-2 md:w-1/5">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src={jhalandar} alt="blog"/>
       
        </div>
      </div>
      <div class="p-2 md:w-1/5">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src={ludhiana} alt="blog"/>
       
        </div>
      </div>
      <div class="p-2 md:w-1/5">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumP5nr3pZ89C4GnNKHTXFvruVyAOm6ZwU2Sibo" alt="blog"/>
       
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-10 justify-center z-10">
      <div class="p-4 md:w-1/4">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1eFZcb2aqBE3Tc9OfeNG6Ht0Q1DCAhwvkjIs2" alt="blog"/>
       
        </div>
      </div>
      <div class="p-4 md:w-1/4">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1fT1nYeZmdZB8h7Gy9E4PH6l5JzgQ0ncsxka2" alt="blog"/>
       
        </div>
      </div>
      <div class="p-4 md:w-1/4">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src="https://zko8va4y8i.ufs.sh/f/GunMk0mxX0j1rz8iUDQRMqkfSpwsFOXIj2goWx8nGybmucet" alt="blog"/>
       
        </div>
      </div>
      
    </div>
  </div>
</section>
      </div>
    </div>
  

 

    </>
  )
}
