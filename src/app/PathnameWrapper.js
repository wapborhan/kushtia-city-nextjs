"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";

export default function PathnameWrapper({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // adjust timing to match Preloader component

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (pathname === "/") {
      body.style.backgroundColor = "#fff";
    } else {
      body.style.backgroundColor = "#e1e4e5";
    }
  }, [pathname]);

  const hideHeaderRoutes = ["/", "/auth/signin", "/auth/signup"];
  const hideFooterRoutes = ["/auth/signin", "/auth/signup"];
  const shouldHideHeader = hideHeaderRoutes.includes(pathname);
  const shouldHideFooter = hideFooterRoutes.includes(pathname);

  return (
    <body className="home-electrician">
      {isLoading && <Preloader />}
      {!shouldHideHeader && <Header />}
      {children}
      {!shouldHideFooter && <Footer />}
    </body>
  );
}
