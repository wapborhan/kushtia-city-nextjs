"use client";
import { navData } from "@/app/(home)/header/headData";
import TopBar from "@/app/(home)/header/TopBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="th-header header-layout1">
      <TopBar />
      <div className="sticky-wrapper">
        <div className="container">
          <div className="menu-area">
            <div className="flex items-center justify-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link href="/">
                    <img
                      src="/assets/img/logo.png"
                      style={{ width: "170px" }}
                      alt="Kushtia City"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link href="/">নীড় পাতা</Link>
                    </li>
                    {navData.map(({ id, link, name }) => {
                      const isActive = pathname === link;
                      return (
                        <li key={id}>
                          <Link
                            href={link}
                            className={isActive ? "active" : ""}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                    {/* <li className="menu-item-has-children">
                      <a href="#">আরও</a>
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
                  className="th-menu-toggle block lg:!hidden"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
