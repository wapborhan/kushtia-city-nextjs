import React from "react";

const About = () => {
  return (
    <div className="overflow-hidden space">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-3">
          <div className="col-span-12 text-start">
            <div className="pe-xxl-5">
              <div className="title-area mb-37 text-center">
                <span className="sub-title">
                  <img src="assets/img/theme-img/title_icon.svg" alt="shape" />
                  ভিশন ও মিশন
                </span>
                <h2 className="sec-title">
                  গণপ্রজাতন্ত্রী বাংলাদেশ সরকার বাংলাদেশ পুলিশ
                </h2>
              </div>
              <div className="checklist list-two-column">
                <ul>
                  <li>সামাজিক স্থিতিশীলতা বজায় রাখা,</li>
                  <li>অপরাধের সংখ্যা কমানো,</li>
                  <li>
                    জনসাধারণের নিরাপত্তা বৃদ্ধি এবং অভ্যন্তরীণ নিরাপত্তা নিশ্চিত
                    করার জন্য প্রতিশ্রুতিবদ্ধ।
                  </li>

                  <li>আইনের শাসন সমুন্নত রাখা।</li>
                  <li>প্রত্যেক নাগরিকের নিরাপত্তা নিশ্চিত করা।</li>
                  <li>অপরাধ প্রতিরোধ করা এবং অপরাধীদের সনাক্ত করা।</li>
                  <li>অপরাধীদের আইনের আওতায় নিয়ে আসা।</li>
                  <li>শান্তি এবং শৃংখলা বজায় রাখা।</li>
                  <li>পুলিশ এবং জনগণের মধ্যে আস্থা বৃদ্ধি করা।</li>
                  <li>আইন শৃঙ্খলা রক্ষা করা।</li>
                  <li>জেলার সর্বস্তরের নিরাপত্তা বিধান ও জনগনের সেবা করা।</li>
                  <li>অপরাধ দমন করা।</li>
                  <li>সন্ত্রাস ও জঙ্গিবাদ মুক্ত দেশ গড়া।</li>
                  <li>দেশকে মাদকমুক্ত করা।</li>
                  <li>
                    নারীর ন্যায্য অধিকার নিশ্চিত করার লক্ষ্যে নারীদেরকে আইনগত
                    সহায়তা প্রদান করা।
                  </li>
                  <li>যৌতুক মুক্ত দেশ ও সমাজ গড়া।</li>
                  <li>অবৈধ ব্যবসায় বাণিজ্য ও চোরাচালানী বন্ধ করা।</li>
                  <li>চুরি, ডাকাতি, দস্যুতা, অপহরণ ইত্যাদি বন্ধ করা।</li>
                  <li>দুষ্টের দমন ও শিষ্টের লালন করা।</li>
                  <li>
                    কুষ্টিয়াকে বসবাসের জন্য একটি ভাল ও নিরাপদ জেলা এবং নাগরিকদের
                    বিশ্বাস ও আস্থা অর্জন, দক্ষ এবং নিবেদিত পেশাদারদের দ্বারা
                    মানসম্মত সেবা প্রদান।
                  </li>
                </ul>
              </div>
              {/* <div className="btn-group mt-30 justify-content-center">
                <a href="about.html" className="th-btn2">
                  Discover More<i className="far fa-arrow-right"></i>
                </a>
                <div className="call-btn">
                  <div className="play-btn">
                    <i className="fal fa-phone"></i>
                  </div>
                  <div className="media-body">
                    <p className="box-label">Call Us 24/7</p>
                    <h6 className="box-link">
                      <a href="tel:+0123456789">+0 (123) 456 789</a>
                    </h6>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <img src="/assets/img/bg/police.jpg" alt="police" className="w-full" />
      </div>
    </div>
  );
};

export default About;
