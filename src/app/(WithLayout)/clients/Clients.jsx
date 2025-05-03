"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Clients = () => {
  return (
    <div className="brand-sec3">
      <div className="brand-inner">
        <Swiper
          modules={[Autoplay]}
          className="th-slider"
          id="brandSlider2"
          spaceBetween={30}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
            1300: { slidesPerView: 5 },
            1500: { slidesPerView: 7 },
          }}
        >
          {[
            "brand_3_1.svg",
            "brand_3_2.svg",
            "brand_3_3.svg",
            "brand_3_4.svg",
            "brand_3_5.svg",
            "brand_3_6.svg",
            "brand_3_7.svg",
            "brand_3_1.svg",
            "brand_3_2.svg",
            "brand_3_3.svg",
            "brand_3_4.svg",
            "brand_3_5.svg",
            "brand_3_6.svg",
            "brand_3_7.svg",
          ].map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="brand-card">
                <img src={`assets/img/brand/${logo}`} alt="Brand Logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
