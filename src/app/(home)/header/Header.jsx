import Link from "next/link";
import { navData } from "./headData";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header className="th-header header-layout5">
      <TopBar />
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area">
            <div className="flex items-start justify-between">
              <div className="col-auto d-none d-lg-block">
                <div className="header-logo">
                  <a href="home-handyman.html">
                    <img
                      src="/assets/img/logo-tertiary.png"
                      style={{ width: "250px" }}
                      alt="KushtiaCity"
                    />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="menu-wrap">
                  <div className="header-logo hidden">
                    <a href="home-handyman.html">
                      <img
                        src="/assets/img/logo-tertiary.png"
                        alt="KushtiaCity"
                      />
                    </a>
                  </div>
                  <nav className="main-menu hidden lg:inline-block">
                    <ul>
                      <li>
                        <Link href="/">নীড় পাতা</Link>
                      </li>
                      {navData &&
                        navData.map(({ id, link, name }) => {
                          return (
                            <li key={id}>
                              <Link href={link}>{name}</Link>
                            </li>
                          );
                        })}
                      {/* 
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">Shop</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="pricing.html">Price Plan</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq Page</a>
                          </li>
                          <li>
                            <a href="error.html">Error Page</a>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="simple-icon searchBoxToggler hidden lg:inline-block"
                  >
                    <i className="far fa-search"></i>
                  </button>
                  <button
                    type="button"
                    className="th-menu-toggle block lg:!hidden"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
              <div className="col-auto d-none d-xl-block">
                <div className="header-button">
                  <a href="contact.html" className="th-btn rounded-12 style3">
                    Get A Quote<i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
