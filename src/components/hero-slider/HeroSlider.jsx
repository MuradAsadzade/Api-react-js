import React from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const HeroSlider = () => {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/9207531/pexels-photo-9207531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/458575/pexels-photo-458575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            style={{ width: "100%", objectFit: "cover" }}
            src="https://images.pexels.com/photos/701014/pexels-photo-701014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
