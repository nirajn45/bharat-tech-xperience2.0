import React from "react";

const Gallery = () => {
  return (
    <div className="bg-black">
      {/* Container */}
      <div className="text-white font-montserrat mt-[20vh] ml-[10vw] flex flex-col">
        <div className="text-6xl font-semibold w-[40%]">No More Boring Stock Images</div>
        <div className="mt-5 text-sm font-medium">Generate high-quality images with just a prompt</div>
        <div className="mt-6">
          <button className="bg-yellow-500 rounded-[40px] h-[40px] font-montserrat text-sm font-bold w-[12vw] hover:bg-yellow-300">
            Join the Beta Waitlist
          </button>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="flex justify-between w-full h-screen mt-10" id="main">
        {/* Image 1 */}
        <div className="w-[19.5%] h-full relative flex flex-col justify-evenly top-[20vh]">
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
        </div>

        {/* Image 2 */}
        <div className="w-[19.5%] h-full relative flex flex-col justify-evenly top-[5vh]">
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
        </div>

        {/* Image 3 */}
        <div className="w-[19.5%] h-full relative flex flex-col justify-evenly top-[-10vh]">
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
        </div>

        {/* Image 4 */}
        <div className="w-[19.5%] h-full relative flex flex-col justify-evenly top-[-25vh]">
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
        </div>

        {/* Image 5 */}
        <div className="w-[19.5%] h-full relative flex flex-col justify-evenly top-[-33vh]">
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
          <div className="w-full h-[30%] bg-white rounded-[17px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;