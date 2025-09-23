import Link from "next/link";

const Soon = () => {
  return (
    <section
      className="h-screen w-screen flex justify-center items-center"
      data-bg-src="/assets/img/bg/error_bg.png"
      style={{
        background: "#91919159",
        backgroundImage: `url("/assets/img/bg/error_bg.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="h-screen grid grid-cols-12">
          <div className="col-span-6 flex items-center justify-center w-full">
            <div className="error-content">
              <h1 style={{ color: "red", fontSize: "90px" }}>কুষ্টিয়া সিটি</h1>
              <h2 className="h1 error-title">
                উফ! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি।
              </h2>
              <p className="error-text">
                বিস্তারিত জানতে চোখ রাখুন আমাদের পেজ{" "}
                <Link
                  className="hover:!text-black !underline !text-xl"
                  href="https://www.facebook.com/kushtiacityz"
                  target="__BLANK"
                >
                  Kushtia City
                </Link>
              </p>
              <Link href="/" className="th-btn">
                <i className="fal fa-home me-2"></i>হোমপেজে ফিরে যান
              </Link>
            </div>
          </div>
          <div className="col-span-6 flex items-end w-full">
            <div className="error-imgs">
              <img
                src="assets/img/shape/error_image.png"
                alt="404 image"
                className="w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soon;
