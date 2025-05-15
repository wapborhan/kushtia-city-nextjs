"use client";
import React from "react";

const HospitalCard = () => {
  return (
    <div
      className="bg-white flex rounded-2xl transition-all p-4"
      data-aos="fade-up"
      data-aos-duration="1100"
      data-aos-delay="200"
    >
      <div className="relative rounded-xl overflow-hidden flex-1  w-8/12">
        <img
          src="https://templates.envytheme.com/hinton/default/assets/img/hospitals/hospital-24.jpg"
          alt="Doctor"
          className="rounded-xl w-11/12"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          <div className="relative">
            <span className="flex flex-col items-center justify-center rounded-md bg-white text-gray-900 text-2xl w-10 h-10">
              <i className="ri-share-line"></i>
            </span>
            <ul className="absolute top-full mt-2 right-0 bg-white shadow-md rounded-md p-2 space-y-1 opacity-0 group-hover:opacity-100 transition">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="flex items-center justify-center rounded-md transition hover:bg-gray-100 w-8 h-8"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/?lang=en"
                  target="_blank"
                  className="flex items-center justify-center rounded-md transition hover:bg-gray-100 w-8 h-8"
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex items-center justify-center rounded-md transition hover:bg-gray-100 w-8 h-8"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <button className="border-0 flex items-center justify-center rounded-md bg-white text-gray-900 text-2xl w-10 h-10 transition hover:bg-gray-100">
            <i className="ri-heart-3-line"></i>
          </button>
        </div>
      </div>

      <div className="py-5 flex-1 flex flex-col justify-between">
        <div className="flex flex-wrap items-center justify-between mb-5">
          <span className="bg-blue-600 text-white font-medium rounded px-3 py-1 text-sm">
            Hospital
          </span>
          <div className="flex items-center text-yellow-500">
            <i className="ri-star-fill"></i>
            <span className="ml-2 text-gray-700 text-sm">1k+ Rating</span>
          </div>
        </div>

        <div className="cont">
          <h3 className="text-2xl font-extrabold mb-3">
            <span className="text-gray-900  transition text-xl">
              Elite Urology Specialists
            </span>
          </h3>
          <p className="relative pl-6 text-gray-600 text-sm mb-4">
            <img
              src="https://templates.envytheme.com/hinton/default/assets/img/icons/pin-black.svg"
              alt="Icon"
              className="absolute left-0 top-0 w-4 h-4"
            />
            1409 Girilaya Madya Stree
          </p>
        </div>

        <div className="relative flex flex-wrap items-center justify-between">
          <span className="relative pl-6 text-gray-500 text-sm">
            <img
              src="https://templates.envytheme.com/hinton/default/assets/img/icons/stethoscope.svg"
              alt="Icon"
              className="absolute left-0 top-0 w-4 h-4"
            />
            60 Doctors
          </span>{" "}
          <a
            href="appointment-booking.html"
            className="relative z-10 bg-blue-100 text-blue-700 font-semibold rounded-xl px-6 py-2 flex items-center gap-2 hover:bg-blue-200 transition"
          >
            <span>
              More
              <img
                src="https://templates.envytheme.com/hinton/default/assets/img/icons/long-arrow-right-blue.svg"
                alt="Icon"
                className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
