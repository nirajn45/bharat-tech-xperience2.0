import React from 'react';



export default function Organizers() {
  return (
    <>
      <div className="md:h-screen mb-24" id="sponser">
        <div className="flex justify-start  overflow-hidden">
          <div className="container">
            <div className="w-3/4">
              <div className="flex flex-wrap w-full py-20 relative mb-4">
                <img
                  alt="gallery"
                  className="w-full object-contain h-full object-center block absolute inset-0 opacity-20"
                  src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum9LPtISoJQ5AcTPoua6UY3sS7XMiGqmnIVwtL"
                />
                <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                  <h2 className="text-xl md:text-6xl text-white font-medium title-font mb-2 text-animation">
                    Organising Committee_
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font relative mb-10">
          <div className="container px-5 md:py-24 mx-auto">
            {/* "To be announced" text */}
            {/* <div className="absolute inset-0 flex items-center justify-center z-20">
              <h1 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-500 to-orange-500 font-bold">To Be Announced</h1>
            </div> */}

            {/* Blurred sponsor logos */}
            <div className="flex flex-wrap gap-10 justify-center -m-4  relative z-10">
              {/* Sponsor 1 */}
              

              {/* Sponsor 2 */}
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumRTLw13mu2iQAmoaFD3d9eMskP7J6LXV4IRly"
                    alt="DEVFOLIO LOGO"
                  />
                </div>
              </div>

              {/* Sponsor 3 */}
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum6KqC3xFtYkXDQV3xwMmdzE6iugCS4bW9e720"
                    alt="ETHINDIA LOGO"
                  />
                </div>
              </div>
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumK5HSYdr0DQkEFIRNZ5MqBjLvotuhOKYrSbUG"
                    alt="Quickpic"
                  />
                </div>
              </div>
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                    src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAuma57rG0qYuBgVRlAkHZebycN59qvW6rTdJwUL"
                    alt="POLYGON LOGO"
                  />
                </div>
              </div>
              <div className="p-3 md:w-1/4">
                <div className="h-full overflow-hidden">
                  <img
                    className="lg:h-40 md:h-36 w-full object-contain object-center"
                    src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumoBdxEvcNYKaOD79uVLETgslNocC8Sqw3xt5m"
                    alt="Quickpic"
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
