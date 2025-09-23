import React from "react";
const policeStations = [
  {
    id: 1,
    name: "Police Station, Mirpur, Kushtia",
    mobile: "",
    telephone: "",
    email: "",
    website: "http://police.mirpur.kushtia.gov.bd/",
    address: "",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
    map: "",
  },
  {
    id: 2,
    name: "Police Station, Veramara, Kushtia",
    mobile: "",
    telephone: "",
    email: "",
    website: "http://police.bheramara.kushtia.gov.bd/",
    address: "",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
    map: "",
  },
  {
    id: 3,
    name: "Police Station, Kushtia Sadar, Kushtia",
    mobile: "",
    telephone: "",
    email: "",
    website: "http://police.kushtiasadar.kushtia.gov.bd/",
    address: "",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
    map: "",
  },
  {
    id: 4,
    name: "Police Station, Kumarakhali, Kushtia",
    mobile: "",
    telephone: "",
    email: "",
    website: "http://police.kumarkhali.kushtia.gov.bd/",
    address: "",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
    map: "",
  },
  {
    id: 5,
    name: "Police Station, Khoksa, Kushtia",
    mobile: "",
    telephone: "",
    email: "",
    website: "http://police.khoksa.kushtia.gov.bd/",
    address: "",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
    map: "",
  },
  {
    id: 6,
    name: "Police Station, Daulatpur, Kushtia",
    mobile: "",
    telephone: "",
    email: "",
    website: "http://police.daulatpur.kushtia.gov.bd/",
    address: "",
    photo: "/assets/img/testimonial/testi_b_1.jpg",
    map: "",
  },
];

const List = () => {
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
          {policeStations.map((station) => {
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

export default List;
