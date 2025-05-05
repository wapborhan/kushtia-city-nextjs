import BloodReqCard from "@/components/shared/BloodReqCard";
import Link from "next/link";

const Donar = () => {
  return (
    <section
      className="overflow-hidden space"
      id="team-sec"
      style={{
        background: "url(assets/img/bg/team_bg_1.jpg)",
      }}
    >
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title2">
                <span className="line"></span>
                <img src="assets/img/theme-img/title_icon5.svg" alt="shape" />
                রক্তের প্রয়োজন
              </span>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn mt-n3 mt-lg-0">
              <Link href="/blood" className="th-btn style4 rounded-12">
                সকল রক্তের অনুরোধঃ<i className="far fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="sec-title text-center">
          এখন পর্যন্ত রক্তের অনুরোধঃ ১৪ জন
        </h2>
        <div className="slider-wrap text-center">
          <div className="grid grid-cols-4 gap-6">
            {[
              { name: "John Simon", image: "team_5_1.png" },
              { name: "Michel Jack", image: "team_5_2.png" },
              { name: "Mackolin Smith", image: "team_5_3.png" },
              { name: "Ralph Edwards", image: "team_5_1.png" },
              { name: "Guy Hawkins", image: "team_5_2.png" },
              { name: "Jacob Jones", image: "team_5_3.png" },
            ]
              .slice(0, 4)
              .map((member, idx) => (
                <div key={idx}>
                  <BloodReqCard data={member} column={12} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donar;
