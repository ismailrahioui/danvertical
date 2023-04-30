import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay , Navigation]}
        className="mySwiper w-[100%] h-[50rem] "
      >
        <SwiperSlide>
            <img src="../../public/wc.jpg" alt="" srcset=""  className="w-[100%] h-[70rem]"/>
            <p className="text-center absolute text-[5rem] font-bold text-white font-[poppins] top-[50%] left-[10%] uppercase">CUALQUIE RETO <br />
                ES POSIBLE</p>
        </SwiperSlide>
        {/* <SwiperSlide><img src="../../public/wc1.jpg" alt="" srcset="" className="w-[100%] h-[54rem]" /></SwiperSlide> */}
        <SwiperSlide>
            <img src="../../public/wc3.jpg" alt="" srcset="" className="w-[100%] h-[57rem]" />
                <p className="text-center absolute text-[3rem] font-bold text-black font-[poppins] top-[30%] left-[60%] uppercase">
                nos aseguramos de <br /> que nuestros clientes <br /> estén  <span>satisfechos</span>
                </p>
        
        </SwiperSlide>
        {/* <SwiperSlide><img src="../../public/wc.jpg" alt="" srcset="" /></SwiperSlide> */}
  

      </Swiper>
    </>
  );
}
