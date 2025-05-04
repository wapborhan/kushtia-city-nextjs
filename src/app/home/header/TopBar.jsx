// import useAuth from "../../../../hooks/useAuth";

import Link from "next/link";

const TopBar = () => {
  // const { user } = useAuth();
  const user = false;

  const d = new Date();
  const date = `${d.toLocaleString("bn-BD", {
    weekday: "long",
  })} ${d.toLocaleString("bn-BD", {
    day: "2-digit",
  })}-${d.toLocaleString("bn-BD", {
    month: "short",
  })}-${d.toLocaleString("bn-BD", {
    year: "numeric",
  })}`;
  return (
    <div className="header-top">
      <div className="container">
        <div className="flex justify-centers justify-between items-center gy-2">
          <div className="col-auto d-none d-lg-block">
            <div className="header-links">
              <ul>
                <li>
                  <i className="fas fa-location-dot"></i> কুষ্টিয়া, খুলনা,
                  বাংলাদেশ
                </li>
                <li>
                  <i className="fas fa-clock"></i>আজ: {date}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto">
            <div className="header-links">
              <ul>
                <li className="d-none d-md-inline-block">
                  <i className="fas fa-messages"></i>{" "}
                  <a href="faq.html">জিজ্ঞাসা</a>
                </li>
                <li>
                  <i className="fas fa-headset"></i>
                  <a href="contact.html">সাপোর্ট</a>
                </li>
                <li>
                  <i className="fas fa-user"></i>
                  <Link href={user ? "/dashboard" : "/signin"}>
                    {user ? "ড্যাশবোর্ড" : "সাইন ইন"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
