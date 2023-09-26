import React, { useState } from 'react';
import robot from '../../Assets/robot.png';
import aboutBg from '../../Assets/about-us.png';
import robotBackGif from '../../Assets/circle-anim.gif';

export default function About() {
  const [activeLink, setActiveLink] = useState('what'); // Initialize with the default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    < >
      <div id="about" className="flex justify-start mt-10 overflow-hidden">
        <div className="container">
          <div className="w-3/4">
            <div className="flex flex-wrap w-full py-24 md:py-32 relative mb-4">
              <img alt="gallery" className="w-full object-contain h-full object-center block absolute inset-0" src={aboutBg} />
              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                <h2 className="text-xl md:text-6xl text-white  font-medium title-font text-animation mb-2">About Us_</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font -mt-16 overflow-hidden">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div className="flex mb-4">
                <a
                  className={`flex-grow ${
                    activeLink === 'what' ? 'text-white' : 'text-gray-500'
                  } border-b-2 cursor-pointer border-gray-300 py-2 text-lg px-1`}
                  onClick={() => handleLinkClick('what')}
                >
                  What...
                </a>
                <a
                  className={`flex-grow ${
                    activeLink === 'who' ? 'text-white' : 'text-gray-500'
                  } border-b-2 cursor-pointer border-gray-300 py-2 text-lg px-1`}
                  onClick={() => handleLinkClick('who')}
                >
                  Who...
                </a>
                <a
                  className={`flex-grow ${
                    activeLink === 'where' ? 'text-white' : 'text-gray-500'
                  } border-b-2 cursor-pointer border-gray-300 py-2 text-lg px-1`}
                  onClick={() => handleLinkClick('where')}
                >
                  Where...
                </a>
              </div>
              {activeLink === 'what' && (
                <p className="leading-relaxed my-16 flex text-white">
                  A 6-day virtual hackathon in Q3 2023.. Participants build an exciting MVP for autonomous agents or apps to compete for cash prizes and other incentives provided by us and our partners.
                </p>
              )}
              {activeLink === 'who' && (
                <p className="leading-relaxed my-16 flex text-white">
                  We are bringing together the best minds in tech to devote themselves to building aligned autonomous agents & applications ready for use by the masses. The unambitious need not apply.
                </p>
              )}
              {activeLink === 'where' && (
                <p className="leading-relaxed my-16 flex text-white">
                  We are opening up this program as a virtual hackathon to ensure anyone in the world can apply. In conjunction with our sponsors, we will aim to facilitate regional working groups to provide opportunities for in-person collaboration.
                </p>
              )}
            </div>

         <div></div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto opacity-30 object-cover object-center rounded"
              src={robotBackGif}
            />
          </div>
        </div>
      </section>
    </>
  );
}
