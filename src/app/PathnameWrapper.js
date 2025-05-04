"use client";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";

export default function PathnameWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (pathname === "/") {
      body.style.backgroundColor = "#fff";
    } else {
      body.style.backgroundColor = "#e1e4e5";
    }
  }, [pathname]);

  return (
    <body className={`home-electrician`}>
      {pathname === "/" ? "" : <Header />}
      {children}
      <Footer />
    </body>
  );
}
