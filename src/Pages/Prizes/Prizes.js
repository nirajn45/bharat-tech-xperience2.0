import React from "react";
import prizesbg from "../../Assets/prizes.png";

export default function Prizes() {
  return (
    <>
      <section id="prizes" className="text-gray-600 mb-40 xl:h-screen body-font">
        <div>
          <div className="flex justify-start mt-10 overflow-hidden">
            <div className="container">
              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap w-full py-8 md:py-32 relative mb-4">
                  <img
                    alt="gallery"
                    className="w-3/4 object-contain h-full object-center block absolute inset-0"
                    src={prizesbg}
                  />
                  <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                    <h2 className="text-2xl md:text-6xl text-white font-medium title-font mb-2">
                      Prizes_
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font overflow-hidden">
          <div className="relative container px-5 mx-auto">
            {/* To be announced text */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h1 className="text-4xl md:text-6xl text-white font-bold">To Be Announced</h1>
            </div>

            {/* Blurred cards */}
            <div className="flex flex-wrap md:m-4 md:mx-16 opacity-50 blur-sm relative z-10">
              {/* Card 1 */}
              <div className="p-4 xl:w-1/3 md:pt-24 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                  <span className="text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    1st runner up
                  </span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">2nd</h2>
                  <h1 className="text-7xl text-white leading-none flex justify-center items-center pb-8 mb-12 border-b border-gray-200">
                    <span>&#8377; 15,000</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Certificate to each team member
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Goodies for every team member
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 xl:w-1/3 order-first md:order-none md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-yellow-500 animate-pulse shadow-xl shadow-white/20 flex flex-col relative overflow-hidden">
                  <span className="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">WINNER</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">1st</h2>
                  <h1 className="text-7xl text-white leading-none flex justify-center items-center pb-8 mb-12 border-b border-gray-200">
                    <span>&#8377; 25,000</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Certificate to each team member
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Goodies for every team member
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 xl:w-1/3 md:pt-24 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                  <span className="text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    2nd runner up
                  </span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">3rd</h2>
                  <h1 className="text-7xl text-white leading-none flex justify-center items-center pb-8 mb-12 border-b border-gray-200">
                    <span>&#8377; 5,000</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Certificate to each team member
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Goodies for every team member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
