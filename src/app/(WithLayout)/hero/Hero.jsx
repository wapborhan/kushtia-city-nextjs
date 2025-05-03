"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="th-hero-wrapper hero-5 slider-area" id="hero">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        autoHeight
        loop
        pagination={{ clickable: true, el: ".slider-pagination" }}
        navigation={{
          nextEl: ".slider-arrow.next",
          prevEl: ".slider-arrow.prev",
        }}
        className="th-slider"
        id="heroSlide5"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="hero-inner"
            style={{
              background: "url(/assets/img/hero/hero_bg_5_1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                background: "rgba(0,0,0,0.5)",
              }}
            ></div>
            <div className="container">
              <div
                className="hero-style5"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <span className="sub-title2 flex">
                  <span className="line"></span>
                  <img src="/assets/img/hero/battery_icon.svg" alt="shape" />
                  Welcome To Rakar
                </span>
                <h1 className="hero-title">
                  <span className="title1">দুঃসময়ই এর জন্য</span>
                  <span className="title2">
                    <span className="text-theme"> রক্ত </span> সঞ্চয় করুন
                  </span>
                </h1>
                <p className="hero-text">
                  সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই এটা
                  সম্ভব হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের ৪৭%-ই আসত
                  পেশাদার রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে আসে ২০-২৫% এ।
                </p>
                <div className="btn-group">
                  <Link href="/blood" className="th-btn rounded-12 style2">
                    বিস্তারিত <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="hero-inner"
            style={{
              background: "url(/assets/img/hero/hero_bg_5_2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <div className="hero-style5">
                <span className="sub-title2">
                  <span className="line"></span>
                  <img src="/assets/img/hero/battery_icon.svg" alt="shape" />
                  Welcome To Rakar
                </span>
                <h1 className="hero-title">
                  <span className="title1">We are expert in</span>
                  <span className="title2">
                    <span className="text-theme">Electrical</span> Services
                  </span>
                </h1>
                <p className="hero-text">
                  We believe in providing top quality workman and are so
                  confident in our level of service that we back it up
                </p>
                <div className="btn-group">
                  <Link href="/service" className="th-btn rounded-12 style2">
                    Our All Services
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="hero-inner"
            style={{
              background: "url(/assets/img/hero/hero_bg_5_3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <div className="hero-style5">
                <span className="sub-title2">
                  <span className="line"></span>
                  <img src="/assets/img/hero/battery_icon.svg" alt="shape" />
                  Welcome To Rakar
                </span>
                <h1 className="hero-title">
                  <span className="title1">We are expert in</span>
                  <span className="title2">
                    <span className="text-theme">Electrical</span> Services
                  </span>
                </h1>
                <p className="hero-text">
                  We believe in providing top quality workman and are so
                  confident in our level of service that we back it up
                </p>
                <div className="btn-group">
                  <Link href="/service" className="th-btn rounded-12 style2">
                    Our All Services
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slider-pagination"></div>
      <div className="icon-box">
        <button
          data-slider-prev="#heroSlide5"
          className="slider-arrow default prev"
        >
          <i className="far fa-arrow-left"></i>
        </button>
        <button
          data-slider-next="#heroSlide5"
          className="slider-arrow default next"
        >
          <i className="far fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
