import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import chandigarh from '../../Assets/gdg chandigarh.png'
import jhalandar from '../../Assets/cp-gdg jalandhar.png'
import ludhiana from '../../Assets/cp-gdg ludhiana.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
  
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper justify-center flex  w-1/2 md:mt-12  "
      >
        <SwiperSlide><img className="w-[400px] " src={chandigarh} alt=''/></SwiperSlide>
        <SwiperSlide><img className="w-[400px]" src={ludhiana}alt=''/></SwiperSlide>
        <SwiperSlide><img className="w-[400px]" src={jhalandar} alt=''/></SwiperSlide>
        
        <div className="autoplay-progress hidden" slot="container-end">
          <svg className='hidden' viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className='hidden' ref={progressContent}></span>
        </div>
      </Swiper>
      
    </>
  );
}
