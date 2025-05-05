import React from "react";

const Details = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-md-6 position-relative">
            <div className="th-team team-card active">
              <div className="box-img">
                <img
                  src="https://templates.envytheme.com/hinton/default/assets/img/doctors/doctor-1.jpg"
                  alt="Team"
                />
              </div>
              <div className="box-content">
                <div className="box-social">
                  <div className="box-btn">
                    <i className="far fa-plus"></i>
                  </div>
                  <div className="th-social">
                    <a target="_blank" href="https://facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>{" "}
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>{" "}
                    <a target="_blank" href="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>{" "}
                    <a target="_blank" href="https://linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <h3 className="box-title">
                  <a href="team-details.html">Dr. Demetrius Wright</a>
                </h3>
                <p className="box-desig">Family Medicine</p>
              </div>
            </div>
          </div>
          <div className="col-span-8 col-md-6">
            <div className="about-card">
              <h2 className="mb-20 pb-1 sec-title">Introduction</h2>
              <p>
                Dr. Demetrius Wright is a private individual or a professional
                who gained prominence in a specific field after January 2025 I
                recommend checkingrecent and credible online sources such as
                professional profiles healthcare directories the official
                website of the relevant institution or clinic where this person
                works. Social media platforms or professional networking sites
                may also provide up-to-date information. Your health and
                well-being are our top priorities. We take the time to listen to
                your concerns, answer your questions, and involve you in the
                decision-making process for your healthcare. We believe in
                empowering our patients to make informed choices about their
                health.
              </p>
              <h4 className="mt-30 mb-20">Specialities</h4>
              <div className="mb-4">
                Our clinic is equipped with modern facilities and advanced
                medical technology to ensure accurate diagnoses and effective
                treatments This enables us to provide you with the highest
                standard of care
                <ul>
                  <li>Cardiology - D.N.Sc.</li>
                  <li>Dermatology - M.B.B.S,Ph.D</li>
                  <li>Family Medicine - D.N.Sc. - M.B.B.S,Ph.D</li>
                  <li>Obstetrics & Gynecology - Ph.D</li>
                </ul>
              </div>
              <h4>Educational Info</h4>
              <div>
                We understand that every patient is unique, and their healthcare
                needs may vary. That's why we create individualized treatment
                plans tailored to your specific condition, lifestyle, and
                preferences.
                <ul>
                  <li>
                    Medical College Of California - (Doctor of Medicine 2005)
                  </li>
                  <li>
                    Center Of Medicine Anthology - (Medicine Doctorate Aid 2010)
                  </li>
                  <li>Cambridge School Of Medicine - (MBBS Ph.D. 2014)</li>
                </ul>
              </div>
              <div className="team-counter-wrap">
                <div className="team-counter">
                  <h5 className="box-title">
                    <span className="counter-number">2000</span>+
                  </h5>
                  <p className="box-text">Total Guide</p>
                </div>
                <div className="team-counter">
                  <h5 className="box-title">
                    <span className="counter-number">65</span>+
                  </h5>
                  <p className="box-text">Total Services</p>
                </div>
                <div className="team-counter">
                  <h5 className="box-title">
                    <span className="counter-number">279</span>+
                  </h5>
                  <p className="box-text">Award Won</p>
                </div>
                <div className="team-counter">
                  <h5 className="box-title">
                    <span className="counter-number">1200</span>+
                  </h5>
                  <p className="box-text">Total Event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="mt-5 pt-xl-2 mb-30">Contact With Me</h4>
        <div className="flex gap-5 justify-between gy-4">
          <div className="col-xl-4 col-md-6">
            <div className="team-contact">
              <div className="icon-btn">
                <i className="fas fa-location-dot"></i>
              </div>
              <div className="media-body">
                <h5 className="box-title">Our Address</h5>
                <p className="box-text">
                  2690 Hiltona Street Victoria Road, New York, Canada
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="team-contact">
              <div className="icon-btn">
                <i className="fas fa-phone"></i>
              </div>
              <div className="media-body">
                <h5 className="box-title">Phone Number</h5>
                <p className="box-text">
                  <a href="tel:+01234567890">+01 234 567 890</a>{" "}
                  <a href="tel:+09876543210">+09 876 543 210</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="team-contact">
              <div className="icon-btn">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="media-body">
                <h5 className="box-title">Email Address</h5>
                <p className="box-text">
                  <a href="mailto:support24@rakar.com">support24@rakar.com</a>{" "}
                  <a href="mailto:contact@rakar.com">contact@rakar.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
