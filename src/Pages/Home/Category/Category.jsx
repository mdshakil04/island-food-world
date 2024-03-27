/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
const Category = () => {
    return (
        <Swiper
        // className=" container mx-auto"
        slidesPerView={5}
        autoplay
        spaceBetween={35}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-4"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Category;