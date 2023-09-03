import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

export const ProductSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
      </Swiper>
    </>
  );
};
