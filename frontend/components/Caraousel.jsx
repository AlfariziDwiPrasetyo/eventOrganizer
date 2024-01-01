"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      centeredSlides={true}
    >
      <SwiperSlide>
        <div className="p-5 flex items-center justify-center">
          <Image
            src={"/makima.jpg"}
            width={1000}
            height={500}
            className="md:w-3/3 md:h-80 object-cover rounded-xl flex items-center justify-center"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 flex items-center justify-center">
          <Image
            src={"/makima.jpg"}
            width={1000}
            height={500}
            className="md:w-3/3 md:h-80 object-cover rounded-xl flex items-center justify-center"
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-5 flex items-center justify-center">
          <Image
            src={"/makima.jpg"}
            width={1000}
            height={500}
            className="md:w-3/3 md:h-80 object-cover rounded-xl flex items-center justify-center"
          ></Image>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
