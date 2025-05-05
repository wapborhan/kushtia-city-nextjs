import React from "react";
import DoctorList from "./DoctorList";

const DoctorSearch = () => {
  return (
    <section className="overflow-hidden space" id="service-sec">
      <div className="shape-mockup spin" data-top="0%" data-right="0%">
        <img src="assets/img/shape/lines_1.png" alt="shape" />
      </div>
      <div className="container">
        <div className="flex justify-center">
          <div className="col-xl-8 col-md-10">
            <div className="title-area text-center">
              <span className="sub-title">
                <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
                ডাক্তার
              </span>
              <h2 className="sec-title">
                ১,৫০০ জন ডাক্তারের তালিকা থেকে আপনার ডাক্তারকে খুঁজুন
              </h2>
              {/* <p className="sec-text">
                সম্মানিত স্বেচ্ছা রক্তদাতা, আপনাকে অভিনন্দন। আপনার জন্যেই এটা
                সম্ভব হয়েছে। ২০০০ সালে আমাদের দেশে প্রয়োজনীয় রক্তের ৪৭%-ই আসত
                পেশাদার রক্তদাতাদের কাছ থেকে। ২০১১ সালে তা কমে আসে ২০-২৫% এ।
              </p> */}
              <div className="my-12">
                <div className="find-doctor container">
                  <form className="grid grid-cols-12 gap-5 form-group">
                    <div className="col-span-3 form-group">
                      <input
                        type="text"
                        placeholder="বিশেষত্ব দ্বারা খুঁজুন"
                        className="form-control"
                      />
                      <i className="text-title far fa-heartbeat"></i>
                    </div>
                    <div className="col-span-3  form-group">
                      <input
                        type="text"
                        placeholder="এলাকা অনুসারে খুঁজুন"
                        className="form-control"
                      />
                      <i className=" text-title far fa-search-location"></i>
                    </div>
                    <div className="col-span-3  form-group">
                      <input
                        type="text"
                        placeholder="নাম দ্বারা খুঁজুন"
                        className="form-control"
                      />
                      <i className="text-title far fa-briefcase-medical"></i>
                    </div>
                    <div className="form-btn col-span-3">
                      <button className="th-btn !mt-0 !mb-0 !rounded-[8px] w-full cursor-pointer">
                        খুঁজুন<i className="fas fa-search ms-2"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <DoctorList />
        </div>
      </div>
    </section>
  );
};

export default DoctorSearch;
