import Link from "next/link";

const Soon = () => {
  return (
    <div
      className="h-screen flex flex-col gap-px justify-center items-center"
      style={{
        background: "var(--title-color)",
        backgroundImage: `url("/main-bg.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className="bg-slate-900 opacity-80 p-10 rounded-3xl text-center">
        <h1 style={{ color: "red", fontSize: "90px" }}>কুষ্টিয়া সিটি</h1>
        <h4 style={{ color: "green", fontSize: "50px" }}>শীঘ্রই আসছে</h4>
        <p className="text-white">
          বিস্তারিত জানতে চোখ রাখুন আমাদের পেজ{" "}
          <Link
            className="hover:!text-black !underline !text-xl"
            href="https://www.facebook.com/kushtiacityz"
            target="__BLANK"
          >
            Kushtia City
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Soon;
