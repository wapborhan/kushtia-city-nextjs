"use client";
import React from "react";

const HospitalCard = ({ hospital }) => {
  const { name, address, registration_no } = hospital;

  return (
    <div className="bg-white grid grid-cols-2 gap-4 rounded-2xl transition-all p-4">
      <div className="relative rounded-xl overflow-hidden flex-1 full">
        <img
          src="/assets/img/testimonial/testi_b_1.jpg"
          alt="hospital"
          className="rounded-xl !h-[250px] w-full"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          <button className="border-0 flex items-center justify-center rounded-md bg-white text-red-600 text-2xl w-10 h-10 transition hover:bg-gray-100">
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>

      <div className="py-5 flex-1 flex flex-col justify-between h-full">
        <div className="flex flex-wrap items-center justify-between mb-5">
          <span className="bg-blue-600 text-white font-medium rounded px-3 py-1 text-sm">
            Hospital
          </span>
          <div className="flex items-center text-yellow-500">
            <i className="ri-star-fill"></i>
            <span className="ml-2 text-gray-700 text-sm">
              রেজিঃ {registration_no}
            </span>
          </div>
        </div>

        <div className="cont">
          <h3 className="text-2xl font-extrabold mb-3">
            <span className="text-gray-900  transition text-xl">{name}</span>
          </h3>
          <p className="relative pl-6 text-gray-600 text-sm mb-4">
            <img
              src="https://templates.envytheme.com/hinton/default/assets/img/icons/pin-black.svg"
              alt="Icon"
              className="absolute left-0 top-0 w-4 h-4"
            />
            {address}
          </p>
          <p className="relative pl-6 text-gray-600 text-sm mb-4">
            <i className="fa fa-phone absolute left-0 top-0 w-4 h-4"></i>
            {address}
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
