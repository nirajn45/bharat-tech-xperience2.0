import React from 'react';
import sponserBg from '../../Assets/sponser.png';
import replit from "../../Assets/sponser-replit.png";
import polygon from "../../Assets/sponser-polygon.png";
import devfolio from "../../Assets/sponser-devfolio.png";

export default function Sponsers() {
  return (
    <>
      <div className="md:h-screen" id="sponser">
        <div className="flex justify-start mt-0 md:mt-10 overflow-hidden">
          <div className="container">
            <div className="w-3/4">
              <div className="flex flex-wrap w-full py-32 relative mb-4">
                <img
                  alt="gallery"
                  className="w-full object-contain h-full object-center block absolute inset-0"
                  src={sponserBg}
                />
                <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                  <h2 className="text-xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
                    Sponsers_
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 md:py-24 mx-auto">
            {/* "To be announced" text */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-500 to-orange-500 font-bold">To Be Announced</h1>
            </div>

            {/* Blurred sponsor logos */}
            <div className="flex flex-wrap gap-10 justify-center -m-4 opacity-50 blur-md relative z-10">
              {/* Sponsor 1 */}
              <div className="p-4 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src={replit}
                    alt="Replit"
                  />
                </div>
              </div>

              {/* Sponsor 2 */}
              <div className="p-4 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src={devfolio}
                    alt="Devfolio"
                  />
                </div>
              </div>

              {/* Sponsor 3 */}
              <div className="p-4 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src={polygon}
                    alt="Polygon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
