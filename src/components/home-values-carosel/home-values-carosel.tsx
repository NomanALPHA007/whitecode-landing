"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { values } from "@/data";

const HomeValuesCarosel = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* {values.map(value =>} */}
        ABC
      </Swiper>
    </>
  );
};

export default HomeValuesCarosel;
