import Link from "next/link";

const About = () => {
  return (
    <>
      <div
        class="overflow-hidden space"
        data-bg-src="assets/img/bg/pattern_bg_5.png"
        id="about-sec"
      >
        <div class="container">
          <div class="grid grid-cols-4 gap-4 align-items-center">
            <div class="col-xl-4 text-start col-span-2">
              <div class="title-area mb-37">
                <span class="sub-title">
                  <span class="line"></span>
                  <img
                    src="assets/img/theme-img/title_icon2.svg"
                    alt="shape"
                  />{" "}
                  ফায়ার সার্ভিস
                </span>
                <h2 class="sec-title">ইতিহাস</h2>
                <p class="sec-text">
                  ফায়ার সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর গণপ্রজাতন্ত্রী বাংলাদেশ
                  সরকারের স্বরাষ্ট্র মন্ত্রণালয়াধীন একটি জরুরি সেবামূলক
                  প্রতিষ্ঠান। এ প্রতিষ্ঠানের সকল কার্যক্রম জনগণের সেবায় নিবেদিত।
                  তৎকালীন বৃটিশ সরকার অবিভক্ত ভারতে ১৯৩৯-৪০ অর্থ সালে ফায়ার
                  সার্ভিস সৃষ্টি করেন। বিভক্তিকালে আঞ্চলিক পর্যায়ে কলকাতা শহরের
                  জন্য কলকাতা ফায়ার সার্ভিস এবং অবিভক্ত বাংলায় বাংলার জন্য
                  (কলকাতাবাদে) বেঙ্গল ফায়ার সার্ভিস সৃষ্টি করেন। ১৯৪৭ সনে এ
                  অঞ্চলের ফায়ার সার্ভিসকে পূর্ব পাকিস্তান ফায়ার সার্ভিস নামে
                  অভিহিত করা হয়। অনুরূপভাবে দ্বিতীয় মহাযুদ্ধের সময় ভারতে
                  বে-সামরিক প্রতিরক্ষা বিভাগ প্রাথমিক পর্যায়ে Air Raid
                  Precautions (ARP) এবং পরবর্তী পর্যায়ে ১৯৫১ সনে আইনি প্রক্রিয়ায়
                  সিভিল ডিফেন্স অধিদপ্তর সৃজিত হয়। কর্মব্যবস্থাপনার লক্ষ্যে সড়ক
                  ও জনপথ বিভাগের অধীন রেসকিউ বিভাগ নামে ১টি বিভাগ সৃষ্টি হয়।
                </p>{" "}
                <p class="sec-text">
                  ১৯৮১ সালের ৯ই এপ্রিল তৎকালীন ফায়ার সার্ভিস পরিদপ্তর ও সিভিল
                  ডিফেন্স অধিদপ্তর সরকারি প্রজ্ঞাপন অনুসারে একীভূত হয়ে ফায়ার
                  সার্ভিস ও সিভিল ডিফেন্স অধিদপ্তর প্রতিষ্ঠিত হয়। পরবর্তীতে সড়ক
                  ও জনপথ বিভাগের অধীন রেসকিউ বিভাগ, ফায়ার সার্ভিস ও সিভিল
                  ডিফেন্স অধিদপ্তরে অর্ন্তভুক্ত হয়।
                </p>
              </div>

              {/* <div class="btn-group justify-content-center btn-mr">
                <a href="about.html" class="th-btn style4">
                  Discover More<i class="far fa-arrow-right ms-2"></i>
                </a>
                <div class="call-btn">
                  <div class="play-btn">
                    <i class="fal fa-phone"></i>
                  </div>
                  <div class="media-body">
                    <p class="box-label">Call Us 24/7</p>
                    <h6 class="box-link">
                      <a href="tel:+0123456789">+0 (123) 456 789</a>
                    </h6>
                  </div>
                </div>
              </div> */}
            </div>
            <div class="col-xl-4 my-5 my-xl-0">
              <div class="rounded-img1">
                <img
                  class="w-100"
                  src="assets/img/normal/about_3.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div class="col-xl-4">
              <div class="contact-process-wrap no-bg">
                <div class="contact-process">
                  <div class="box-number">01</div>
                  <div class="media-body">
                    <h3 class="box-title text-title">মিশন</h3>
                    <p class="box-text text-body">
                      দুযোর্গ - দুর্ঘটনায় জীবন ও সম্পদ রক্ষার মাধ্যমে নিরাপদ
                      বাংলাদেশ গড়ে তোলা
                    </p>
                  </div>
                </div>
                <div class="contact-process">
                  <div class="box-number">02</div>
                  <div class="media-body">
                    <h3 class="box-title text-title">ভিশন</h3>
                    <p class="box-text text-body">
                      অগ্নিকান্ডসহ সকল দুর্যোগ মোকাবেলা ও নাগরিক সুরক্ষা নিশ্চিত
                      করণের মাধ্যমে এশিয়ার অন্যতম শ্রেষ্ট প্রতিষ্ঠান হিসেবে
                      সক্ষমতা অর্জন
                    </p>
                  </div>
                </div>
                <div class="contact-process">
                  <div class="box-number">03</div>
                  <div class="media-body">
                    <h3 class="box-title text-title">মুলনীতি</h3>
                    <p class="box-text text-body">
                      বাংলাদেশ ফায়ার সার্ভিস ও সিভিল ডিফেন্সের মূলনীতি হলো- গতি,
                      সেবা, ত্যাগ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
