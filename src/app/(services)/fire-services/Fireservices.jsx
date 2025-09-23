import React from "react";

const fireStationList = [
  {
    id: 1,
    name: "কুষ্টিয়া ফায়ার স্টেশন",
    mobile: "01921-022877",
    telephone: "024777-81922",
    email: "kustia.kst@fireservice.gov.bd",
    website: "http://fireservice.kushtiasadar.kushtia.gov.bd/",
    address:
      "কুষ্টিয়া শহরের প্রান কেন্দ্র মজমপুর গেট হতে পূর্বে ৫০০ গজ দুরে এনএস রোডে কুষ্টিয়া ফায়ার স্টেশন অবস্থিত",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
    map: "https://www.google.com/maps/place/Kushtia+Fire+Service+%26+Civil+Defence+Station/@23.9094034,89.123697,17z/data=!3m1!4b1!4m5!3m4!1s0x39fe97ac286d55fd:0xc1cab3f84e420798!8m2!3d23.9094204!4d89.1258893",
  },
  {
    id: 2,
    name: "ভেড়ামারা ফায়ার স্টেশন",
    mobile: "01901-022885",
    telephone: "024777-5099",
    email: "bhera.kst@fireservice.gov.bd",
    website: "",
    address: "ভেড়ামারা",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
  },
  {
    id: 3,
    name: "দৌলতপুর ফায়ার স্টেশন",
    mobile: "নাম্বার নেই",
    telephone: "নাম্বার নেই",
    email: "ইমেইল নেই",
    website: "",
    address: "দৌলতপুর",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
  },
  {
    id: 4,
    name: "খোকসা ফায়ার স্টেশন",
    mobile: "01901-022887",
    telephone: "024777-85400",
    email: "khok.kst@fireservice.gov.bd",
    website: "",
    address: "খোকসা",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
  },
  {
    id: 5,
    name: "কুমারখালী ফায়ার স্টেশন",
    mobile: "01901-022881",
    telephone: "024777-84365",
    email: "kumar.kst@fireservice.gov.bd",
    website: "",
    address: "কুমারখালী",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
  },
  {
    id: 6,
    name: "মিরপুর ফায়ার স্টেশন",
    mobile: "01901-022883",
    telephone: "024777-85666",
    email: "mir.kst@fireservice.gov.bd",
    website: "",
    address: "মিরপুর",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
  },
];

const Fireservices = () => {
  return (
    <section class="space">
      <div class="px-8">
        <div class="title-area text-center">
          <span class="sub-title">
            <img src="assets/img/theme-img/title_icon.svg" alt="Icon" />
            ফায়ার সার্ভিস ও সিভিল ডিফেন্স
          </span>
          <h2 class="sec-title">অফিস তালিকা সমূহ</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {fireStationList.map((station) => {
            const { id, name, mobile, telephone, email, address, photo } =
              station;
            return (
              <div class="col-lg-6" key={id}>
                <div class="testi-card">
                  <div class="box-img">
                    <img src={photo} alt="Image" />
                  </div>
                  <div class="box-content">
                    <h2 className="text-white">{name}</h2>
                    <h6 className="text-white">{email}</h6>
                    <div className="contact flex gap-2">
                      <h6 className="text-white">{mobile}</h6>
                      <h6 className="text-white">{telephone}</h6>
                    </div>
                    <h5></h5>
                    <p class="box-text">{address}</p>
                    {/* <div class="box-profile">
                      <div class="box-avater">
                        <img
                          src="assets/img/testimonial/testi_1_1.jpg"
                          alt="Avater"
                        />
                      </div>
                      <div class="media-body">
                        <h3 class="box-title">Sumaiya Zara</h3>
                        <p class="box-desig">CEO Of Company</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fireservices;
