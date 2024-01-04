"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import checkMobileScreen from "@/utils/checkMobileScreen";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER}event`).then((res) => {
      const dataTopThree = res.data.events.slice(0, 4);
      setData(dataTopThree);
    });
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={checkMobileScreen() === true ? 1 : 2}
      loop={true}
      centeredSlides={true}
    >
      {data.map((datas, index) => (
        <SwiperSlide key={index}>
          <div className="p-5 flex w-full rounded-xl h-64 md:h-96 items-center justify-center">
            <Image
              src={datas.banner}
              width={1000}
              height={1000}
              className=" object-contain flex items-center justify-center "
              alt={datas.name}
            ></Image>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
