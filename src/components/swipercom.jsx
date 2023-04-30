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
        className="mySwiper  mt-10 "
      >
        <SwiperSlide>
                <img src="../../public/sk.jpg" alt="" srcset="" className=" relative top-9 left-44 w-[20%]"/>
                <label htmlFor="" className="absolute text-[22px] w-[50%] font-bold  text-white font-[poppins] top-[3%] left-[40%] uppercase">Intervenciones en industria</label>
                <p className="text-justify absolute text-[22px] w-[50%] font-thin italic mt-8 text-white font-[poppins] top-[10%] left-[40%] uppercase">
                    Realizamos intervenciones en industrias con alto perfil de riesgo como centrales químicas o nucleares.
                    Dado que cada industria requiere tareas de mantenimiento únicas, tenemos un equipo técnico capaz de diseñar una solución que se adapte de la mejor manera a la dificultad de acceso, los costos y tiempos de ejecución. Siempre con la seguridad como premisa.
                </p>
                <button className="absolute top-[80%] left-[40%] bg-[#CAC633] text-[1.4rem] text-black font-bold py-2 px-14 "> ver màs </button>
                <button className="absolute top-[80%] left-[56%] bg-transparent text-[#CAC633] font-semibold py-2 px-14 border border-[#CAC633] text-[1.4rem]"> Solicita Presupuesto</button>
        </SwiperSlide>
        <SwiperSlide>
                <img src="../../public/sk1.jpg" alt="" srcset="" className=" relative top-9 left-44 w-[20%]"/>
                <label htmlFor="" className="absolute text-[22px] w-[50%] font-bold  text-white font-[poppins] top-[3%] left-[40%] uppercase">Intervenciones en industria</label>
                <p className="text-justify absolute text-[22px] w-[50%] font-thin italic mt-8 text-white font-[poppins] top-[10%] left-[40%] uppercase">
                    Realizamos intervenciones en industrias con alto perfil de riesgo como centrales químicas o nucleares.
                    Dado que cada industria requiere tareas de mantenimiento únicas, tenemos un equipo técnico capaz de diseñar una solución que se adapte de la mejor manera a la dificultad de acceso, los costos y tiempos de ejecución. Siempre con la seguridad como premisa.
                </p>
                <button className="absolute top-[80%] left-[40%] bg-[#CAC633] text-[1.4rem] text-black font-bold py-2 px-14 "> ver màs </button>
                <button className="absolute top-[80%] left-[56%] bg-transparent text-[#CAC633] font-semibold py-2 px-14 border border-[#CAC633] text-[1.4rem]"> Solicita Presupuesto</button>
        </SwiperSlide>
        <SwiperSlide>
                <img src="../../public/sk2.jpg" alt="" srcset="" className=" relative top-9 left-44 w-[20%]"/>
                <label htmlFor="" className="absolute text-[22px] w-[50%] font-bold  text-white font-[poppins] top-[3%] left-[40%] uppercase">Intervenciones en industria</label>
                <p className="text-justify absolute text-[22px] w-[50%] font-thin italic mt-8 text-white font-[poppins] top-[10%] left-[40%] uppercase">
                    Realizamos intervenciones en industrias con alto perfil de riesgo como centrales químicas o nucleares.
                    Dado que cada industria requiere tareas de mantenimiento únicas, tenemos un equipo técnico capaz de diseñar una solución que se adapte de la mejor manera a la dificultad de acceso, los costos y tiempos de ejecución. Siempre con la seguridad como premisa.
                </p>
                <button className="absolute top-[80%] left-[40%] bg-[#CAC633] text-[1.4rem] text-black font-bold py-2 px-14 "> ver màs </button>
                <button className="absolute top-[80%] left-[56%] bg-transparent text-[#CAC633] font-semibold py-2 px-14 border border-[#CAC633] text-[1.4rem]"> Solicita Presupuesto</button>
        </SwiperSlide>
        <SwiperSlide>
                <img src="../../public/sk3.jpg" alt="" srcset="" className=" relative top-9 left-44 w-[20%]"/>
                <label htmlFor="" className="absolute text-[22px] w-[50%] font-bold  text-white font-[poppins] top-[3%] left-[40%] uppercase">Intervenciones en industria</label>
                <p className="text-justify absolute text-[22px] w-[50%] font-thin italic mt-8 text-white font-[poppins] top-[10%] left-[40%] uppercase">
                    Realizamos intervenciones en industrias con alto perfil de riesgo como centrales químicas o nucleares.
                    Dado que cada industria requiere tareas de mantenimiento únicas, tenemos un equipo técnico capaz de diseñar una solución que se adapte de la mejor manera a la dificultad de acceso, los costos y tiempos de ejecución. Siempre con la seguridad como premisa.
                </p>
                <button className="absolute top-[80%] left-[40%] bg-[#CAC633] text-[1.4rem] text-black font-bold py-2 px-14 "> ver màs </button>
                <button className="absolute top-[80%] left-[56%] bg-transparent text-[#CAC633] font-semibold py-2 px-14 border border-[#CAC633] text-[1.4rem]"> Solicita Presupuesto</button>
        </SwiperSlide>
        
       
  

      </Swiper>
    </>
  ); 
}
