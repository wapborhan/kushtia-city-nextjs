"use client";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 800); // adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="preloader">
      <button
        className="th-btn preloaderCls"
        onClick={() => setShowLoader(false)}
      >
        Cancel Preloader
      </button>
      <div className="preloader-inner">
        <div className="loader">
          <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
          <span></span>
        </div>
      </div>
    </div>
  );
}
