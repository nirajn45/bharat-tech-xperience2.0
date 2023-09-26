import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../../Components/components/earth";
import { Link } from "react-router-dom";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
export default function Contact() {
  const phoneNumber = 9649370602;
  return (
    <>
      <section
        id="contact"
        class="text-white overflow-hidden flex flex-wrap body-font relative"
      >
        <div class=" w-1/2 inset-0">
          <div>
            <CanvasContainer>
              <Canvas>
                <Suspense fallback={null}>
                  <Earth />
                </Suspense>
              </Canvas>
            </CanvasContainer>
          </div>
        </div>

        <section class="text-white  ml-0 h-1/2 w-2/4 body-font relative">
          <div class="container  ">
            <div className="bg-black/20 py-5 border-l-2 p-5 md:p-0">
              <div class="flex flex-col text-center w-full mb-12">
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Still,have some doubt?
                </p>
                <h1 class="text-xl md:text-6xl uppercase font-medium title-font ">
                  Contact Us
                </h1>
              </div>
              <div class="w-full flex justify-center mx-auto">
                <div class="flex flex-wrap -m-2">
                  <div class="p-2 w-full flex justify-center">
                    <div class="relative">Email : gdsc@sviet.ac</div>
                  </div>
                  <div class="p-2 w-full  flex justify-center">
                    <div class="relative">Phone No. : 9654024881</div>
                  </div>
                  <div class="p-2 mt-5 w-full  flex justify-center">
                    <div class="relative">
                    <a
      href={`whatsapp://send?phone=${phoneNumber}`}
      className="flex items-center  hover:bg-green-600 border-2 border-white text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
    >
      <svg
        width="32"
        height="32"
        viewBox="-2.73 0 1225.016 1225.016"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        className=" flex"
      >
        {/* SVG icon code */}
      </svg>
      <span>Ask on whatsapp</span>
    </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-white h-1/2 -mt-96 w-2/4 body-font relative">
          <div class="container    ">
            <div className="bg-black/20 py-5  border-r-2">
              <div class="flex flex-col text-center w-full  mb-12">
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                All set??
                </p>
                <h1 class="text-xl md:text-6xl uppercase font-medium title-font ">
                 Register Now
                </h1>
              </div>
             <div className="flex justify-center">

             <Link to='/register'>
               <button className='bg-gray-500  py-2 px-6 hover:bg-green-500 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] '>Register Now...</button>
             </Link>
             </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
