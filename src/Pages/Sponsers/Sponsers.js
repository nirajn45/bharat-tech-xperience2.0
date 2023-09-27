import React from 'react'
import sponserBg from '../../Assets/sponser.png'
import replit from "../../Assets/sponser-replit.png"
import polygon from "../../Assets/sponser-polygon.png"
import devfolio from "../../Assets/sponser-devfolio.png"
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
      <section class="text-gray-600 body-font">
  <div class="container px-5 md:py-24 mx-auto">
    <div class="flex flex-wrap gap-10 justify-center -m-4">
      <div class="p-4 md:w-1/4">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src={replit} alt="blog"/>
       
        </div>
      </div>
      <div class="p-4 md:w-1/4">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src={devfolio} alt="blog"/>
       
        </div>
      </div>
      <div class="p-4 md:w-1/4">
        <div class="h-full  overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-contain object-center" src={polygon} alt="blog"/>
       
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  

 

    </>
  )
}
